import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { UIModule } from '../../modules/ui/ui.module';

import {ActivityPageComponent} from './activity-page.component';
import {ActivityRoutingModule} from './activity-page.routing';

import { ActivityComponent }   from '../../components/activity/activity.component';
import { CardActivityComponent }   from '../../components/card-activity/card-activity.component';


@NgModule({
    imports:[
        CommonModule,
        ActivityRoutingModule,
        UIModule
    ],
    declarations:[
        ActivityPageComponent,
        ActivityComponent,
        CardActivityComponent
    ],
    providers:[]
})
export class ActivityModule{};