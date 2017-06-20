import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainPageComponent } from './mainPage/main-page.component';
import { PremiumPageComponent } from './premiumPage/premium-page.component';


const appRoutes: Routes = [
  {
    path: 'login',
    loadChildren: '../modules/loginPage/login-page.module#LoginModule',
    data: { title: '300 kM' }
  },
  {
    path: 'setting',
    component: PremiumPageComponent,
    data: { title: '300 kM' }
  },
  {
    path: '',
    component: MainPageComponent,
    data: { title: '300 kM' }
  },
  { path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
      // ,{ preloadingStrategy: SelectivePreloadingStrategy }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }