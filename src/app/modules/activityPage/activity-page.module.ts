import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';



import {ActivityPageComponent} from './activity-page.component';
import {ActivityRoutingModule} from './activity-page.routing';


@NgModule({
    imports:[
        CommonModule,
        ActivityRoutingModule
    ],
    declarations:[
        ActivityPageComponent
    ],
    providers:[]
})
export class ActivityModule{};