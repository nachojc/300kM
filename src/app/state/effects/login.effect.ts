import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { Injectable } from "@angular/core";
import { Effect, Actions, toPayload } from "@ngrx/effects";
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


import { LoginActionTypes, LoginCompleteAction, LoginErrorAction } from "../actions/login.action";
import { LoginModel } from "../models/login.model";
import { LoginService } from "../../services/login.service";


@Injectable()
export class LoginEffect {

    constructor(private action$: Actions, private login: LoginService) { }


    @Effect() checkUser$: Observable<Action> = this.action$
        .ofType(LoginActionTypes.LOGIN_CHECK)
        .debounceTime(300)
        .map(toPayload)
        .switchMap((data) => {

            return this.login.checkLogin(data)
                .map(res => new LoginCompleteAction(res.json()))
                .catch(error => of(new LoginErrorAction(error)))
        })


}