import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-circle',
  templateUrl: './icon-circle.component.html',
  styleUrls: ['./icon-circle.component.scss']
})
export class IconCircleComponent { 
  @Input() label: string;
  @Input() icon: string;
}
