import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


import { Observable } from 'rxjs/Observable';
import { initialState } from '../state/models/login.model';




@Injectable()
export class LoginService {
    private API_PATH = 'http://localhost:4001/api/v1/login/';

    constructor(private http: Http) { }

    checkLogin(params: any): Observable<any> {
        return this.http.post(`${this.API_PATH}`, params)
            
    }

}