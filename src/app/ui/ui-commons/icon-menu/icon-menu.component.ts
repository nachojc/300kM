import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-menu',
  templateUrl: './icon-menu.component.html',
  styleUrls: ['./icon-menu.component.scss']
})
export class IconMenuComponent { 
  @Input() label: string;
  @Input() icon: string;
}
