import { Action } from "@ngrx/store";
import { AuthState } from "./auth.state";
import { AuthActions } from "./auth.actions";

/* TODO:
 *   - consider adding data validation to reducer: e.g. verify that the payload on a login action is a valid user object
 *
 */

const initialState: AuthState = {
  authenticated: false
};

export default function authReducer(state: AuthState = initialState, action: Action): AuthState {

  switch (action.type) {
    case AuthActions.LOGGED_IN:
      return {
        authenticated: true,
        user: action.payload
      };

    case AuthActions.LOGGED_OUT:
      return {
        authenticated: false
      };

    case AuthActions.ERRORED:
      return {
        authenticated: false,
        error: action.payload
      };

    default:
      return state;

  }


}
