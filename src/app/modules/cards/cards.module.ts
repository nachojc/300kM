import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import {UIModule} from '../ui/ui.module';

import {CardActivityComponent} from './card-activity/card-activity.component';



@NgModule({
    imports:[
        CommonModule,
        UIModule
    ],
    declarations:[
        CardActivityComponent
    ],
    exports:[
        CardActivityComponent
        ],
    providers:[]
})
export class CardsModule{};