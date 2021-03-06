import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';


import {IconComponent} from './icon/icon.component';
import {IconCircleComponent} from './icon-circle/icon-circle.component';
import {AvatarCircleComponent} from './avarar-circle/avarar-circle.component';
import {IconMenuComponent} from './icon-menu/icon-menu.component';
import {IpInputComponent} from './ip-input/ip-input.component';
import {IpButtonComponent} from './ip-button/ip-button.component';



@NgModule({
    imports:[
        CommonModule,
        FormsModule
    ],
    declarations:[
        IconComponent,
        IconCircleComponent,
        IconMenuComponent,
        AvatarCircleComponent,
        IpInputComponent,
        IpButtonComponent
    ],
    exports:[
        IconMenuComponent,
        IpInputComponent,
        IpButtonComponent,
        IconCircleComponent,
        AvatarCircleComponent
        ],
    providers:[]
})
export class UIModule{};