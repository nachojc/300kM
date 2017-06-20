import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';


import {IconComponent} from './icon/icon.component';
import {IconCircleComponent} from './icon-circle/icon-circle.component';
import {IconMenuComponent} from './icon-menu/icon-menu.component';
import {IpInputComponent} from './ip-input/ip-input.component';



@NgModule({
    imports:[
        CommonModule,
        FormsModule
    ],
    declarations:[
        IconComponent,
        IconCircleComponent,
        IconMenuComponent,
        IpInputComponent
    ],
    exports:[
        IconMenuComponent,
        IpInputComponent,
        IconCircleComponent
        ],
    providers:[]
})
export class UIModule{};