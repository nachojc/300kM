import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ip-button',
  templateUrl: './ip-button.component.html',
  styleUrls: ['./ip-button.component.scss'],
  host:{
    '[class.disabled]':'desabled'
  }
})
export class IpButtonComponent {
  @Input() icon: string;
  @Input() label: string;
  @Input() disabled: boolean = false;

  @Output() clickChange: EventEmitter<string> = new EventEmitter();

  clicChange(e: any) {
    if(!this.disabled){
      this.clickChange.emit(e);
    }
  }
}
