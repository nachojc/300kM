import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { UIModule } from '../../ui/ui-commons/ui.module';

import {ActivityPageComponent} from './activity-page.component';
import {ActivityRoutingModule} from './activity-page.routing';

import { ActivityComponent }   from '../../components/activity/activity.component';
import { CardsModule }   from '../../ui/ui-cards/cards.module';


@NgModule({
    imports:[
        CommonModule,
        ActivityRoutingModule,
        UIModule,
        CardsModule
    ],
    declarations:[
        ActivityPageComponent,
        ActivityComponent
    ],
    providers:[]
})
export class ActivityModule{};