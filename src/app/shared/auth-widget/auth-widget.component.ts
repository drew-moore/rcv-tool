import {
  Component,
  OnInit,
  HostListener,
  Input,
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from "@angular/core";
import { Subject, BehaviorSubject, Observable } from "rxjs";
import { AuthState } from "../../core/state/auth/auth.state";
import { FormGroup, FormControl, Validators } from "@angular/forms";

export type Mode = 'INACTIVE' | 'LOGIN_ACTIVE' | 'SIGNUP_ACTIVE';
const EMAIL_REGEX = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

@Component({
  selector: 'rcv-auth-widget-cmp',
  templateUrl: './auth-widget.component.html',
  styleUrls: [ './auth-widget.component.scss' ],
  animations: [
    trigger('loginSignupBtns', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible => hidden', animate('150ms linear')),
      transition('hidden => visible', animate('250ms 250ms linear')),
    ]),
    trigger('fromRight', [
      transition('void => *', [
        style({ transform: 'translateX(300px)' }),
        animate('150ms 150ms ease-out', style({ transform: 'translateX(0)' }))
      ]),
      transition('* => void', [
        animate('150ms ease-in', style({ transform: 'translateX(300px)' }))
      ])
    ]),
    trigger('collapseRight', [
      state('visible', style({ transform: 'translateX(0)scaleX(1)', opacity: 1 })),
      state('collapsed', style({ transform: 'translateX(125px)scaleX(0)', opacity: 0 })),

      transition('visible => collapsed', animate('150ms', keyframes([
        style({ transform: 'translateX(75px)scaleX(1)', opacity: 1 }),
        style({ transform: 'translateX(100px)scaleX(0.5)', opacity: 0.5 }),
        style({ transform: 'translateX(125px)scaleX(0)', opacity: 0 })
      ]))),
      transition('collapsed => visible', animate('150ms 150ms ease-out')),

    ]),
    trigger('shrinkInactive', [
      state('active', style({
        width: '*'
      })),
      state('inactive', style({
        width: '120px'
      })),
      transition('inactive => active', animate('150ms 150ms')),
      transition('active => inactive', animate('150ms'))
    ]),
    trigger('growRight', [
      transition('void => *', [
        animate('150ms 300ms', keyframes([
          style({ width: 0, transform: 'scaleX(0)' }),
          style({ width: '*', transform: 'scaleX(0)' }),
          style({ width: '*', transform: 'scaleX(1)' }),
        ]))
      ]),
      transition('* => void', [
        animate('150ms', keyframes([
          style({ width: '*', transform: 'scaleX(1)' }),
          style({ width: '*', transform: 'scaleX(0)' }),
          style({ width: 0, transform: 'scaleX(0)' }),
        ]))
      ])
    ]),
  ]
})
export class AuthWidgetComponent implements OnInit {

  @Input() state: Observable<AuthState>;
  currMode: Mode = 'INACTIVE';

  inputActive: Observable<boolean>;


  loginForm = new FormGroup({
    email: new FormControl('', [ Validators.required, Validators.pattern(EMAIL_REGEX) ]),
    password: new FormControl('', [ Validators.required ])
  });

  signupForm = new FormGroup({
    email: new FormControl('', [ Validators.required, Validators.pattern(EMAIL_REGEX) ]),
    name: new FormControl('', [ Validators.required ]),
    password: new FormControl('', [ Validators.required ])
  });

  private mousedOver: Subject<boolean> = new BehaviorSubject(false);
  private _inputFocused: Subject<boolean> = new BehaviorSubject(false);

  @HostListener('mouseenter')
  private onMouseenter() { this.mousedOver.next(true); }

  @HostListener('mouseleave')
  private onMouseleave() { this.mousedOver.next(false); }

  constructor() {

  }

  ngOnInit() {

    const unhovers$ = this.mousedOver.filter(val => val === false)
                          .flatMapTo(Observable.timer(3000)
                                               .takeUntil(this.mousedOver.filter(val => val === true)));
    unhovers$.subscribe(() => {
      this.currMode = 'INACTIVE';
      this._inputFocused.next(false);
    });

    const inputNonempty = Observable.combineLatest(
      this.loginForm.controls[ 'email' ].valueChanges
                                        .map(val => !!val)
                                        .startWith(false),
      this.signupForm.controls[ 'email' ].valueChanges
                                         .map(val => !!val)
                                         .startWith(false)
    ).map(([loginEmailNonempty, signupEmailNonempty]) => loginEmailNonempty || signupEmailNonempty)
                                    .startWith(false)
                                    .distinctUntilChanged();


    this.inputActive = this._inputFocused.withLatestFrom(inputNonempty,
      (inputFocused, inputNonempty) => inputNonempty || inputFocused);

  }

  loginClicked() {
    this.currMode = 'LOGIN_ACTIVE';
  }

  signupClicked() {
    this.currMode = 'SIGNUP_ACTIVE';
  }

  inputFocused() {
    this._inputFocused.next(true);
  }

  inputBlurred() {
    this._inputFocused.next(false);
  }

}
