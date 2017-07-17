import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { UIModule } from '../../modules/ui/ui.module';

import {EventsPageComponent} from './events-page.component';
import {EventsRoutingModule} from './events-page.routing';

import { EventsComponent }   from '../../components/events/events.component';
import { CardsModule }   from '../cards/cards.module';


@NgModule({
    imports:[
        CommonModule,
        EventsRoutingModule,
        UIModule,
        CardsModule
    ],
    declarations:[
        EventsPageComponent,
        EventsComponent
    ],
    providers:[]
})
export class EventsModule{};