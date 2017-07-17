import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { UIModule } from '../../modules/ui/ui.module';

import {NewsPageComponent} from './news-page.component';
import {NewsRoutingModule} from './news-page.routing';

import { NewsComponent }   from '../../components/news/news.component';
import { CardsModule }   from '../cards/cards.module';


@NgModule({
    imports:[
        CommonModule,
        NewsRoutingModule,
        UIModule,
        CardsModule
    ],
    declarations:[
        NewsPageComponent,
        NewsComponent
    ],
    providers:[]
})
export class NewsModule{};