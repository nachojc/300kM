import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ip-input',
  templateUrl: './ip-input.component.html',
  styleUrls: ['./ip-input.component.scss'],
  host:{
    '[class.icon]':'icon',
    '[class.no-val]':'!inputModel',
    '[class.no-label]':'!label'
  }
})
export class IpInputComponent {
  @Input() icon: string;
  @Input() label: string;
  @Input() type: string = 'text';
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() inputModel: any;

  @Output() inputModelChange: EventEmitter<string> = new EventEmitter();
  @Output() change: EventEmitter<string> = new EventEmitter();

  inputChange(e: any) {
    this.inputModelChange.emit(this.inputModel);
    this.change.emit(this.inputModel);
  }
}
