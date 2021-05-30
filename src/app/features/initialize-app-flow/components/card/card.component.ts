import { Component, EventEmitter, Input, Output } from "@angular/core";                                              

@Component({
  selector: "nf-card",
  template: `
    <div
      [style.border]="'3px solid' + colorTitle "
      [ngStyle]="{ 'background': ( selected ? colorTitle : 'transparent') }"
      (click)="!selected ? $selectEvent.emit() : null"
    >
      <p
        [ngClass]="{ 'card-selected': selected }"
      >
        {{title}}
      </p>
    </div> 
  `,
  styles: [
    `
      div {
        /* height: 22vh; */
        height: 12vh;
        text-align: center;
        border-radius: 20px;
        padding: 0 3vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .card-selected {
        color: white
      }

      p{
        font-size: 2vh;
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
