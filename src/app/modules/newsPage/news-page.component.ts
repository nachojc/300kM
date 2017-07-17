import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent {
  constructor(
    private _router: Router,

  ) {
   
  }

  
}
