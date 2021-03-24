import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "nf-button-select",
  template: `
    <ion-button
      [ngStyle]="{
        'border-color': selected ? color : '',
        opacity: selected ? '1' : '0.3'
      }"
      (click)="!selected ? $selectEvent.emit() : null"
    >
      <i
        *ngIf="text === 'Uomo'"
        class="fa fa-mars"
        [ngStyle]="{ color: color }"
      ></i>
      <i
        *ngIf="text === 'Donna'"
        class="fa fa-venus"
        [ngStyle]="{ color: color }"
      ></i>

      {{ text }}
    </ion-button>
  `,
  styles: [
    `
      ion-button {
        --background: trasparent;
        --background-activated: null;
        color: black;
        border: 2px solid darkgray;
        border-radius: 0;
        height: 6vh;
        width: 18vh;
        font-family: "Lato";
        font-weight: 600;
      }

      i {
        font-size: 3vh;
        margin-right: 1.5vh;
      }
    `,
  ],
})
export class ButtonSelectComponent {
  @Input() public text: string = "";
  @Input() public color: string = "";
  @Input() public selected: boolean = false;

  @Output() public $selectEvent: EventEmitter<void> = new EventEmitter();
}
