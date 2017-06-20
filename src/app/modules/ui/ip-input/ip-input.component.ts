import { Component, Input } from '@angular/core';

@Component({
  selector: 'ip-input',
  templateUrl: './ip-input.component.html',
  styleUrls: ['./ip-input.component.scss']
})
export class IpInputComponent {
  @Input() label: string;
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
}
