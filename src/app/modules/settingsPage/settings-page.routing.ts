import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SettingsPageComponent }   from './settings-page.component';
import { SettingsComponent }   from '../../components/settings/settings.component';


const routes: Routes = [
  {
    path: '',
    component: SettingsPageComponent,
//    canActivate: [AuthGuard],
    children: [
      {
        path: '',
//        canActivateChild: [AuthGuard],
        children: [
//          { path: 'crises', component: ManageCrisesComponent },
//          { path: 'heroes', component: ManageHeroesComponent },
          { path: '', component: SettingsComponent }
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
  providers: [
    
  ]
})
export class SettingsRoutingModule { }
