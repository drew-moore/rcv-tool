import { User } from "../../domain/user";

export interface AuthError {
  code: string,
  message: string;
}

export interface AuthState {
  authenticated: boolean;
  user?: User;
  error?: AuthError;
}
