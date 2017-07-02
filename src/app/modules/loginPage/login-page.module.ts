import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { provideStore} from '@ngrx/store';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";




import {LoginPageComponent} from './login-page.component';
import {LoginRoutingModule} from './login-page.routing';

import {LoginComponent} from '../../components/login/login.component';

import {Login} from '../../state/reducers/login.reducer';
import {LoginEffect} from '../../state/effects/login.effect';

import { LoginService } from "../../services/login.service";


@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        LoginRoutingModule,
        StoreModule.provideStore({Login}),
        EffectsModule.run(LoginEffect)
    
    ],
    declarations:[
        LoginPageComponent,
        LoginComponent
    ],
    providers:[LoginService]
})
export class LoginModule{};