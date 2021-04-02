import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nf-level-number',
  templateUrl: './level-number.component.html',
  styleUrls: ['./level-number.component.scss'],
})
export class LevelNumberComponent {

  @Input() public numberLevel: number;
  @Input() public backgroundColor: string;

}
