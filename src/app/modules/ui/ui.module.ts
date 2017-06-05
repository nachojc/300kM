import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';


import {IconMenuComponent} from './icon-menu/icon-menu.component';



@NgModule({
    imports:[
        CommonModule,
        FormsModule
    ],
    declarations:[
        IconMenuComponent
    ],
    exports:[IconMenuComponent],
    providers:[]
})
export class UIModule{};