import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'nf-footer',
  template: `
    <ion-footer mode="ios">
      <ion-toolbar>
        <ion-title>
          {{text}}
        </ion-title>
        <ion-buttons slot="end">
          <ion-button [disabled]="disable" (click)="$goNext.emit()">
            <span>Avanti</span> <ion-icon name="arrow-forward-outline"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-buttons slot="start">
          <ion-button size="large" (click)="$goBack.emit()">
            <ion-icon name="arrow-back-outline"></ion-icon> <span>Indietro</span>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-footer>
  `,
  styles: [`
    ion-toolbar {
      --border-width: 0 !important;
      --background: #f9f9f9;
      font-family: 'Lato';
    }

    ion-title {
      font-size: 2.5vh;
    }

    ion-button {
      --color: black;
    }
    ion-button.button-disabled {
      --color: #777777;
    }
    span {
      font-family: 'Lato';
      margin: 0 10px;
      font-size: 2.5vh;
    }
    ion-icon {
      font-size: 3vh;
    }
  `],
})
export class FooterComponent {

  @Input() text: string;
  @Input() disable: boolean = true;
  @Output() $goNext: EventEmitter<void> = new EventEmitter();
  @Output() $goBack: EventEmitter<void> = new EventEmitter();

}
