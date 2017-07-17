import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { EventsPageComponent }   from './events-page.component';
import { EventsComponent }   from '../../components/events/events.component';


const routes: Routes = [
  {
    path: '',
    component: EventsPageComponent,
    children: [
      {
        path: '',
        children: [
//          { path: 'crises', component: ManageCrisesComponent },
//          { path: 'heroes', component: ManageHeroesComponent },
          { path: '', component: EventsComponent }
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
export class EventsRoutingModule { }
