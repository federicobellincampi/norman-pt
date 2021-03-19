import { Component, EventEmitter, Input, Output } from "@angular/core";                                              

@Component({
  selector: "nf-card",
  template: `
    <ion-card
      [style.background]="'url( assets/img/'+ img + ') 0 0/100% 100% no-repeat'"
      [ngStyle]="{ 'border': (selected ? '3px solid' + colorTitle : '0') }"
      [ngClass]="{ 'card-selected': selected }"
      (click)="!selected ? $selectEvent.emit() : null"
    >
      <ion-card-title ion-card-title
        style="color: {{colorTitle}}"
      >
        {{title}}
      </ion-card-title>
    </ion-card> 
  `,
  styles: [
    `
      ion-card {
        height: 22vh;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
        padding: 14px 80px 18px 36px;       
        opacity: 0.7;
      }
  
      ion-card-title {
        position: absolute;
        bottom: 0px;
        left: 16px;
      }

      .card-selected {
        transform: scale(1.05);
        box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
        opacity: 1;
      }

    `
  ],
})
export class CardComponent {

  @Input() img: string = '';
  @Input() title: string = '';
  @Input() colorTitle: string = '';
  @Input() selected: boolean = false; 

  @Output() $selectEvent: EventEmitter<void> = new EventEmitter();

  constructor() { }

}
