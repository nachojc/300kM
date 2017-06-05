import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';


import {LoginPageComponent} from './login-page.component'
import {LoginRoutingModule} from './login-page.routing'

import {LoginComponent} from '../../components/login/login.component'



@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        LoginRoutingModule
    ],
    declarations:[
        LoginPageComponent,
        LoginComponent
    ],
    providers:[]
})
export class LoginModule{};