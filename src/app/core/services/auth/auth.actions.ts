import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { User } from "../../domain/user";
import { AuthError } from "./auth.state";

@Injectable()
export class AuthActions {


  static readonly LOGGED_IN = '@authReducer:loggedIn';

  public loggedIn(data: User): Action {
    return {
      type: AuthActions.LOGGED_IN,
      payload: data
    }
  }

  static readonly LOGGED_OUT = '@authReducer:loggedOut';

  public loggedOut(): Action {
    return {
      type: AuthActions.LOGGED_OUT
    }
  }

  static readonly ERRORED = '@authReducer:errored';

  public errored(error: AuthError): Action {
    return {
      type: AuthActions.ERRORED,
      payload: error
    }
  }

}
