import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-activity-avatars',
  templateUrl: './card-activity-avatars.component.html',
  styleUrls: ['./card-activity-avatars.component.scss']
})
export class CardActivityAvatarsComponent {

  @Input() name: string;
  @Input() descriptor: string;
  @Input() time: string;

}
