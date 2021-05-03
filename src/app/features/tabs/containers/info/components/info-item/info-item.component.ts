import { Component, Input, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'nf-info-item',
  templateUrl: './info-item.component.html',
  styleUrls: ['./info-item.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({opacity: 0}),
          animate('500ms', style({transition: '0.5s ease-in-out'}))
        ]),
        transition(':leave', [
          style({opacity: 1}),
          animate('500ms', style({transition: '0.5s ease-in-out', height: '20px'}))
        ])
      ]
    )
  ],
})
export class InfoItemComponent implements OnInit {

  @Input() public title: string = '';
  @Input() public subTitle: string = '';
  @Input() public numberDays: 2 | 4 | 6 = 2;

  public open: boolean = false;

  constructor() { }

  ngOnInit() {}

}
