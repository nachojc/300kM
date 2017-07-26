import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { Router } from '@angular/router';
import {APP_BASE_HREF, HashLocationStrategy, Location, LocationStrategy} from '@angular/common';
import { HttpModule }    from '@angular/http';


import { AppRoutingModule } from './core/app.routing-module';

import { UIModule } from './ui/ui-commons/ui.module';


import { AppComponent } from './core/app.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component'
import { FooterMenuComponent } from './components/footer-menu/footer-menu.component'


import { MainPageComponent } from './core/mainPage/main-page.component';
import { PageNotFoundComponent } from './core/not-found.component';





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
    HeaderMenuComponent,
    FooterMenuComponent,
    PageNotFoundComponent
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
