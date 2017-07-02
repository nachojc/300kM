import { Action } from '@ngrx/store';

import {LoginModel} from '../models/login.model';



export const LOGIN = 'Login';
export const LOGIN_COMPLETE = 'Login correct';
export const LOGIN_CHECK = 'Login checking';
export const LOGIN_ERRROR = 'Login error';
export const LOGOUT = 'Logout';

export const LoginActionTypes = {
  LOGIN :  LOGIN,
  LOGIN_COMPLETE : LOGIN_COMPLETE,
  LOGIN_CHECK : LOGIN_CHECK,
  LOGIN_ERRROR : LOGIN_ERRROR,
  LOGOUT : LOGOUT
};

export class LoginAction implements Action {
  readonly type = LoginActionTypes.LOGIN;

  constructor(public payload: LoginModel) { }
}

export class LoginCompleteAction implements Action {
  readonly type = LoginActionTypes.LOGIN_COMPLETE;

  constructor(public payload: LoginModel) { }
}

export class LoginCheckingAction implements Action {
  readonly type = LoginActionTypes.LOGIN_CHECK;

  constructor(public payload: LoginModel) { }
}

export class LoginErrorAction implements Action {
  readonly type = LoginActionTypes.LOGIN_ERRROR;

  constructor(public payload: LoginModel) { }
}

export class LogoutAction implements Action {
  readonly type = LoginActionTypes.LOGOUT;

  constructor(public payload: LoginModel) { }
}


/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions = 
    LoginAction | 
    LoginCompleteAction | 
    LoginCheckingAction | 
    LoginErrorAction | 
    LogoutAction;