import { Injectable } from '@angular/core';
import { AngularFire } from "angularfire2";
import { Store } from "@ngrx/store";
import { AppState } from "../state/index";
import { Observable } from "rxjs";
import { AuthState } from "../state/auth/auth.state";

@Injectable()
export class AuthService {

  public readonly state: Observable<AuthState>;

  constructor(private fire: AngularFire, private store: Store<AppState>) {
    this.state = this.store.select<AuthState>('auth');
  }




}
