import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from "rxjs";
import { AuthState } from "../../core/state/auth/auth.state";

type Mode = 'INACTIVE' | 'LOGIN_ACTIVE' | 'SIGNUP_ACTIVE';

@Component({
  selector: 'rcv-auth-widget-cmp',
  templateUrl: './auth-widget.component.html',
  styleUrls: ['./auth-widget.component.scss']
})
export class AuthWidgetComponent implements OnInit {

  @Input() state: Observable<AuthState>;
  private mousedOver: Subject<boolean> = new BehaviorSubject(false);
  private currMode: Observable<Mode>;

  @HostListener('mouseenter')
  private onMouseenter(){ this.mousedOver.next(true); }

  @HostListener('mouseleave')
  private onMouseleave(){ this.mousedOver.next(false); }

  constructor() {

  }

  ngOnInit() {
  }

}
