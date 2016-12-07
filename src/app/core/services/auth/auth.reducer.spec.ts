import authReducer from "./auth.reducer";
import { AuthActions } from "./auth.actions";
describe('AuthReducer', () => {
  const testUser = { name: 'Test User', id: 'id-test-user', image: 'testuser.png', isVerified: false };
  const testErr = { code: 'auth/jibberish', message: 'absolute malarkey' };

  it('should have the expected initial state', () => {
    const it = authReducer(undefined, { type: 'jibberish' });
    expect(it.authenticated).toBe(false);
    expect(it.error).toBeUndefined();
    expect(it.user).toBeUndefined();
  });

  it('should return the expected state after a login action', () => {
    const it = authReducer(undefined, { type: AuthActions.LOGGED_IN, payload: testUser });
    expect(it.authenticated).toBe(true);
    expect(it.error).toBeUndefined();
    expect(it.user).toEqual(testUser);
  });

  it('should return the expected state after an auth error action', () => {
    const it = authReducer(undefined, { type: AuthActions.ERRORED, payload: testErr });
    expect(it.authenticated).toBe(false);
    expect(it.user).toBeUndefined();
    expect(it.error).toEqual(testErr);
  });


  it('should return the expected state after a logout action', () => {
    const it = authReducer({ authenticated: true, user: testUser }, { type: AuthActions.LOGGED_OUT });
    expect(it.authenticated).toBe(false);
    expect(it.user).toBeUndefined();
    expect(it.error).toBeUndefined();
  });


});
