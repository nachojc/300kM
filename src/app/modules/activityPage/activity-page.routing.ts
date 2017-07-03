import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ActivityPageComponent }   from './activity-page.component';
import { ActivityComponent }   from '../../components/activity/activity.component';


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
          { path: '', component: ActivityComponent }
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
  providers: []
})
export class ActivityRoutingModule { }
