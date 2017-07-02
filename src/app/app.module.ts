import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { Router } from '@angular/router';
import {APP_BASE_HREF, HashLocationStrategy, Location, LocationStrategy} from '@angular/common';
import { HttpModule }    from '@angular/http';


import { AppRoutingModule } from './core/app.routing-module';

import { LoginModule } from './modules/loginPage/login-page.module';
import { UIModule } from './modules/ui/ui.module';


import { AppComponent } from './core/app.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component'
import { FooterMenuComponent } from './components/footer-menu/footer-menu.component'


import { MainPageComponent } from './core/mainPage/main-page.component';
import { PremiumPageComponent } from './core/premiumPage/premium-page.component';





@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    MainPageComponent,
    PremiumPageComponent,
    HeaderMenuComponent,
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
