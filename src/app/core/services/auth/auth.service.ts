import { Injectable } from "@angular/core";
import { AngularFire } from "angularfire2";
import { Store } from "@ngrx/store";
import { AppState } from "../../core.state";
import { Observable } from "rxjs";
import { AuthState } from "./auth.state";

@Injectable()
export class AuthService {

  public readonly state: Observable<AuthState>;

  constructor(private fire: AngularFire, private store: Store<AppState>) {
    this.state = this.store.select<AuthState>('auth');
  }

}
