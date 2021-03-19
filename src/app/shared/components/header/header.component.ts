import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Store } from '@ngrx/store';
import { AppState } from '../../../core/core.module';
import * as RouterActions from '../../../core/router/store/router.actions';

@Component({
  selector: "nf-header",
  template: `
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons *ngIf="showBackButton" slot="start" (click)="backButtonHandler()">
          <ion-icon name="arrow-back-sharp"></ion-icon>
        </ion-buttons>
        <ion-title>{{title}}</ion-title>
      </ion-toolbar>
    </ion-header>
  `,
  styles: [
    `
      ion-toolbar{
        padding-left: 16px;
        padding-right: 16px;
        --background: black;
        --color: white;
      }

      ion-header {
        --border-color: transparent;
      }
    `
  ],
})
export class HeaderComponent {

  @Input() title: string;
  @Input() showBackButton: boolean;

  constructor(private store: Store<AppState>) {}

  backButtonHandler() {
    this.store.dispatch(RouterActions.back())
  }
}
