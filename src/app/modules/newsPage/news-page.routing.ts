import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { NewsPageComponent }   from './news-page.component';
import { NewsComponent }   from '../../components/news/news.component';


const routes: Routes = [
  {
    path: '',
    component: NewsPageComponent,
    children: [
      {
        path: '',
        children: [
//          { path: 'crises', component: ManageCrisesComponent },
//          { path: 'heroes', component: ManageHeroesComponent },
          { path: '', component: NewsComponent }
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
export class NewsRoutingModule { }
