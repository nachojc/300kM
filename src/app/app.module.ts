import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { Router } from '@angular/router';
import {APP_BASE_HREF, HashLocationStrategy, Location, LocationStrategy} from '@angular/common';

import { AppRoutingModule } from './core/app.routing-module';

import { LoginModule } from './modules/loginPage/login-page.module';
import { UIModule } from './modules/ui/ui.module';


import { AppComponent } from './core/app.component';
import { FooterMenuComponent } from './components/footer-menu/footer-menu.component'


import { MainPageComponent } from './core/mainPage/main-page.component';
import { PremiumPageComponent } from './core/premiumPage/premium-page.component';





@NgModule({
  imports: [
    BrowserModule,
//    LoginModule,
    AppRoutingModule,
    UIModule
  ],
  declarations: [
    AppComponent,
    MainPageComponent,
    PremiumPageComponent,
    FooterMenuComponent
  ],
  providers: [Location, 
  //ios 
  {provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(router: Router) {
    // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
 }
