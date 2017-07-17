import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { provideStore} from '@ngrx/store';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";




import {LoginPageComponent} from './login-page.component';
import {LoginRoutingModule} from './login-page.routing';

import { UIModule } from '../../modules/ui/ui.module';
// ID de cliente google    370345460828-eek0vj5jjlt01kft83p5rdi38nqnin8a.apps.googleusercontent.com
// Este es tu secreto de cliente:  0iJSBvXpBsnLdGCpUDA9zTBW

import {LoginComponent} from '../../components/login/login.component';

import {Login} from '../../state/reducers/login.reducer';
import {LoginEffect} from '../../state/effects/login.effect';

import { LoginService } from "../../services/login.service";


@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        LoginRoutingModule,
        UIModule,
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