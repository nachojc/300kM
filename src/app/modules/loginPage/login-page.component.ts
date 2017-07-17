import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { LoginActionTypes } from '../../state/actions/login.action';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  constructor(
    private _router: Router,
    private _store: Store<any>
  ) {
    _store.select('Login').subscribe(this._login);
    _store.dispatch({ type: LoginActionTypes.LOGIN });
  }

  _login = (log: any) => {
    if (log && log.status) {
      this._router.navigate(['/']);
    }
  }
}
