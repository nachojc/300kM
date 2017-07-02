import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ActivityPageComponent }   from './activity-page.component';
import {AuthGuard, AuthService} from '../../core/security';

const routes: Routes = [
  {
    path: '',
    component: ActivityPageComponent,
    children: [
      {
        path: '',
        children: [
//          { path: 'crises', component: ManageCrisesComponent },
//          { path: 'heroes', component: ManageHeroesComponent },
          { path: '', component: ActivityPageComponent }
        ]
      }
    ]
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
export class ActivityRoutingModule { }
