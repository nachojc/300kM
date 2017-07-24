import { Component, Input } from '@angular/core';

@Component({
  selector: 'avarar-circle',
  templateUrl: './avarar-circle.component.html',
  styleUrls: ['./avarar-circle.component.scss']
})
export class AvatarCircleComponent { 
  @Input() src: string;
}
