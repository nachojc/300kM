import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Login } from '../../state/reducers/login.reducer';
import { LoginActionTypes, LoginCheckingAction } from '../../state/actions/login.action';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public user: string;
  public mail: string;
  public pwd: string;

  public loginBtn: boolean = true;

  constructor(private _store: Store<any>) {
  }

  login = () => {
    if (this.user && this.pwd) {
      this._store.dispatch({ type: LoginActionTypes.LOGIN_CHECK, payload: { usr: this.user, pwd: this.pwd } })
    }
  }
  facebook() {

  }
  google() {

  }
  pwdChange(e: any) {
    this.loginBtn = !this.user || !this.mail || !this.pwd;
  }
}
