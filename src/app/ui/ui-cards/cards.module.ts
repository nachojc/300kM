import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import {UIModule} from '../../ui/ui-commons/ui.module';

import {CardActivityComponent} from './card-activity/card-activity.component';
import {CardActivityAvatarsComponent} from './card-activity-avatars/card-activity-avatars.component';



@NgModule({
    imports:[
        CommonModule,
        UIModule
    ],
    declarations:[
        CardActivityComponent,
        CardActivityAvatarsComponent
    ],
    exports:[
        CardActivityComponent,
        CardActivityAvatarsComponent
        ],
    providers:[]
})
export class CardsModule{};