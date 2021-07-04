import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'nf-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent {
  @Output() public $closeModal: EventEmitter<boolean> = new EventEmitter();
}
