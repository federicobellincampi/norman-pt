import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'nf-footer',
  template: `
    <ion-footer>
      <ion-toolbar>
        <ion-title>
          {{text}}
        </ion-title>
        <ion-buttons slot="end">
          <ion-button [disabled]="disable" (click)="$goNext.emit()">
            <span>Avanti</span> <ion-icon name="arrow-forward-circle-outline"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-buttons slot="start">
          <ion-button size="large" (click)="$goBack.emit()">
            <ion-icon name="arrow-back-circle-outline"></ion-icon> <span>Indietro</span>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-footer>
  `,
  styles: [`
    ion-toolbar {
      --border-width: 0 !important;
      font-family: 'Lato';
    }
    ion-button {
      --color: black;
    }
    ion-button.button-disabled {
      --color: #777777;
    }
    span {
      margin: 0 10px;
    }
    ion-icon {
      font-size: 30px;
    }
  `],
})
export class FooterComponent {

  @Input() text: string;
  @Input() disable: boolean = true;
  @Output() $goNext: EventEmitter<void> = new EventEmitter();
  @Output() $goBack: EventEmitter<void> = new EventEmitter();

}
