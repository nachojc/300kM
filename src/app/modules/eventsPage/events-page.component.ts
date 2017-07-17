import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent {
  constructor(
    private _router: Router,

  ) {
   
  }

  
}
