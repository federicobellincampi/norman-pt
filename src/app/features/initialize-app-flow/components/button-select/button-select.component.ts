import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'nf-button-select',
  templateUrl: './button-select.component.html',
  styleUrls: ['./button-select.component.scss'],
})
export class ButtonSelectComponent {

  @Input() public text: string = '';
  @Input() public borderColor: string = ''
  @Input() public selected: boolean = false;

  @Output() public $selectEvent: EventEmitter<void> = new EventEmitter();

}
