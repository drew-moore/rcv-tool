/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { AuthWidgetComponent } from "./auth-widget.component";
import { ReactiveFormsModule } from "@angular/forms";
import { Subject, BehaviorSubject } from "rxjs";
import { MaterialModule } from "@angular/material";
import { AuthState } from "../../core/services/auth/auth.state";

describe('AuthWidgetComponent', () => {
  const testUser = { name: 'Test User', id: 'id-test-user', image: 'testuser.png', isVerified: false };
  let stateSubject: Subject<AuthState>;
  let component: AuthWidgetComponent;
  let fixture: ComponentFixture<AuthWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, MaterialModule.forRoot() ],
      declarations: [ AuthWidgetComponent ]
    })
           .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthWidgetComponent);
    component = fixture.componentInstance;
    stateSubject = new BehaviorSubject({ authenticated: false });
    component.state = stateSubject;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show anonymous and authenticated dialogues when initialized with unauth and auth state, respectively',
    () => {
      setState(false);

      let anonWrappers = fixture.debugElement.queryAll(By.css('.anonymous-wrapper')),
        authWrappers = fixture.debugElement.queryAll(By.css('.authenticated-wrapper'));

      expect(anonWrappers.length)
        .toEqual(1, `Expected to find 1 .anonymous-wrapper's but found ${anonWrappers.length}`);
      expect(authWrappers.length)
        .toEqual(0, `Expected to find 0 .authenticated-wrapper's but found ${authWrappers.length}`);

      setState(true);
      setTimeout(() => {
        anonWrappers = fixture.debugElement.queryAll(By.css('.anonymous-wrapper'));
        authWrappers = fixture.debugElement.queryAll(By.css('.authenticated-wrapper'));

        expect(anonWrappers.length)
          .toEqual(0, `Expected to find 0 .anonymous-wrapper's but found ${anonWrappers.length}`);
        expect(authWrappers.length)
          .toEqual(1, `Expected to find 1 .authenticated-wrapper's but found ${authWrappers.length}`);
      }, 150);

    });


  function setState(authenticated: boolean) {
    if (authenticated) {
      stateSubject.next({ authenticated: true, user: testUser });
    } else {
      stateSubject.next({ authenticated: false });
    }
    fixture.detectChanges();
  }

});
