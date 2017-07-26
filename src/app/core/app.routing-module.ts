import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainPageComponent } from './mainPage/main-page.component';

import { AuthGuard, AuthService } from './security';
import { CanDeactivateGuard } from './security/can-deactivate-guard.service';
import { SelectivePreloadingStrategy } from './security/selective-preloading-strategy';

import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  {
    path: 'login',
    loadChildren: '../modules/loginPage/login-page.module#LoginModule',
    data: { preload: true }
  },
  {
    path: 'activity',
    loadChildren: '../modules/activityPage/activity-page.module#ActivityModule',
    data: { title: 'Activity at 300 kM' }
  },
  {
    path: 'news',
    loadChildren: '../modules/newsPage/news-page.module#NewsModule',
    data: { title: 'News at 300 kM' }
  },
  {
    path: 'events',
    loadChildren: '../modules/eventsPage/events-page.module#EventsModule',
    data: { title: 'Events at 300 kM' }
  },
  {
    path: 'setting',
    canLoad: [AuthGuard],
//    canActivate: [AuthService],
    loadChildren: '../modules/settingsPage/settings-page.module#SettingModule',
    data: { title: '300 kM' }
  },
  {
    path: '',
    component: MainPageComponent,
    pathMatch: 'full',
    data: { title: '300 kM' }
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
      , { preloadingStrategy: SelectivePreloadingStrategy }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    CanDeactivateGuard,
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }
