import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "nf-select-component",
  template: `
    <ion-item>
      <i *ngIf="title === 'Genere'" class="fa fa-venus-mars"></i>
      <i *ngIf="title === 'Obiettivo'" class="fas fa-dumbbell"></i>
      <ion-label>{{ title }}</ion-label>
      <ion-select
        [ngClass]="{
          'custom-interface-man': gender === 'uomo',
          'custom-interface-woman': gender === 'donna'
        }"
        [value]="valueSelected"
        (ionChange)="$changeEvent.emit($event.detail.value)"
      >
        <ion-select-option
          *ngFor="let val of valuesOption"
          [value]="val.toLowerCase()"
          >{{ val }}</ion-select-option
        >
      </ion-select>
    </ion-item>
  `,
  styles: [
    `
      i {
        background: -moz-linear-gradient(right, #ff99cc 50%, #45b6fe 50%);
        background: -webkit-linear-gradient(right, #ff99cc 50%, #45b6fe 50%);
        background: linear-gradient(to right, #ff99cc 50%, #45b6fe 50%);
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 3vh;
        margin-right: 1vh;
        display: inline;
      }

      ion-item {
        --background: #474747;
        --color: white;
        --border-style: 0;
        margin: 16px;
        border-radius: 10px;
      }

      ion-label {
        font-family: "Lato" !important;
        font-weight: 600;
      }

      ion-select::part(text) {
        position: absolute;
        right: 4vh;
        font-family: cursive;
        font-weight: 400;
      }

      .custom-interface-man {
        color: #45b6fe;
      }

      .custom-interface-woman {
        color: #ff99cc;
      }
    `,
  ],
})
export class SelectComponentComponent {
  @Input() public title: string = "";
  @Input() public gender: "uomo" | "donna";
  @Input() public valueSelected: "uomo" | "donna" | "massa muscolare" | "tonificarsi" | "perdere peso";
  @Input() public valuesOption: ["Uomo", "Donna"] | ["Massa muscolare", "Tonificarsi", "Perdere peso"];

  @Output() public $changeEvent: EventEmitter<string> = new EventEmitter();
}
