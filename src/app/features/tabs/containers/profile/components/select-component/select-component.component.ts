import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'nf-select-component',
  templateUrl: './select-component.component.html',
  styleUrls: ['./select-component.component.scss'],
})
export class SelectComponentComponent {

  @Input() public title: string = '';
  @Input() public gender: 'uomo' | 'donna';
  @Input() public valueSelected: 'uomo' | 'donna' | 'massa muscolare' | 'tonificarsi' | 'perdere peso';
  @Input() public valuesOption:  ['Uomo', 'Donna'] | ['Massa muscolare', 'Tonificarsi', 'Perdere peso'];

  @Output() public $changeEvent: EventEmitter<string> = new EventEmitter();

}
