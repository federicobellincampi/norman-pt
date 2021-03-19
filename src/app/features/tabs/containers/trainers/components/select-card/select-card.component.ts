import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'nf-select-card',
  templateUrl: './select-card.component.html',
  styleUrls: ['./select-card.component.scss'],
})
export class SelectCardComponent {

    @Input() text: string = '';
    @Output() $cardSelected: EventEmitter<string> = new EventEmitter();

    constructor() {
      console.log(this.text);
    }

}
