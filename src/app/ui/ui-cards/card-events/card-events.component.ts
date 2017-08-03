import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-events',
  templateUrl: './card-events.component.html',
  styleUrls: ['./card-events.component.scss']
})
export class CardAEventsComponent implements OnInit {
  @Input() avatar: string;
  @Input() images: string[];

  @Input() name: string;
  @Input() description: string;
  @Input() time: string;

  @Input() obj: any;


  constructor() { }

  ngOnInit() {
    this.obj = this.obj ||
      {
        avatar: this.avatar,
        images: this.images || [],
        name: this.name,
        description: this.description,
        time: this.time
      };
    this.obj.number = this.obj.images && this.obj.images.length ? '+ ' + Math.max(this.obj.images.length - 2, 0) : 0;
  }
}
