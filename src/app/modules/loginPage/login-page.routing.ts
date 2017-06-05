import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginPageComponent } from './login-page.component';
import { LoginComponent } from '../../components/login/login.component';

import {AuthGuard, AuthService}               from '../../core/security';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
    children: [
      {
        path: '',
        children: [
//          { path: 'crises', component: ManageCrisesComponent },
//          { path: 'heroes', component: ManageHeroesComponent },
          { path: '', component: LoginComponent }
        ]
      }
    ]
  },
  {
    path: 'demo',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      routes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuard,AuthService]
})
export class LoginRoutingModule { }
