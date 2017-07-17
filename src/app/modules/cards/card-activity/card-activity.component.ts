import { Component } from '@angular/core';

@Component({
  selector: 'card-activity',
  templateUrl: './card-activity.component.html',
  styleUrls: ['./card-activity.component.scss']
})
export class CardActivityComponent { 
  public nameTitle:string="Diana Santos";
  public textTitle:string="ha creado un evento";
  public timeSlot:string="25 min ago";

}
