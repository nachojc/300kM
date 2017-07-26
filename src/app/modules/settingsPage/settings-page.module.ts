import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import {SettingsPageComponent} from './settings-page.component';
import {SettingsRoutingModule} from './settings-page.routing';

import { SettingsComponent }   from '../../components/settings/settings.component';



@NgModule({
    imports:[
        CommonModule,
        SettingsRoutingModule
    ],
    declarations:[
        SettingsPageComponent,
        SettingsComponent
    ],
    providers:[]
})
export class SettingModule{};