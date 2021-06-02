import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'nf-info-item',
  templateUrl: './info-item.component.html',
  styleUrls: ['./info-item.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('true', style({
        overflow: 'hidden',
        height: '*',
        padding: '0 16px 16px'
      })),
      state('false', style({
        opacity: '0',
        overflow: 'hidden',
        height: '0px',
        padding: '0'
      })),
      transition('true => false', animate('300ms ease-in-out')),
      transition('false => true', animate('300ms ease-in-out'))
    ])
  ]
})
export class InfoItemComponent implements OnInit {

  @Input() public title: string = '';
  @Input() public subTitle: string = '';
  @Input() public numberDays: 2 | 4 | 6 = 2;

  public open: boolean = false;

  constructor() { }

  ngOnInit() {}

}
