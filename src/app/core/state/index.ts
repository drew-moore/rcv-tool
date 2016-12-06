import { ActionReducer, combineReducers } from "@ngrx/store";
import { compose } from "@ngrx/core/compose";
import { storeFreeze } from "ngrx-store-freeze";
import { environment } from "../../../environments/environment";
import { AuthState } from "./auth/auth.state";
import authReducer from "./auth/auth.reducer";

export * from './auth';


export interface AppState {
  auth: AuthState
}

const reducers = {
  auth: authReducer
};

const developmentReducer: ActionReducer<AppState> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<AppState> = combineReducers(reducers);

export function coreReducers(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  }
  else {
    return developmentReducer(state, action);
  }
}


