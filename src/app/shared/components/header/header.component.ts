import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Store } from '@ngrx/store';
import { AppState } from '../../../core/core.module';
import * as RouterActions from '../../../core/router/store/router.actions';

@Component({
  selector: "nf-header",
  template: `
    <ion-header class="ion-no-border" mode="ios">
      <ion-toolbar
        [ngStyle]="{  '--background': (imgUrl ? 'url( '+ imgUrl + ') 0 0/100% 100% no-repeat' : 'black')  }"
      >
        <ion-buttons *ngIf="showBackButton" slot="start" (click)="backButtonHandler()">
          <ion-icon name="chevron-back-outline"></ion-icon>
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
        font-family: 'Lato';
        --background: black;
        --color: white;
      }

      ion-header {
        --border-color: transparent;
      }

      ion-icon {
        font-size: 30px;
      }
    `
  ],
})
export class HeaderComponent implements OnInit {

  @Input() public title: string = '';
  @Input() public showBackButton: boolean = false;
  @Input() public imgUrl: string;

  constructor(private store: Store<AppState>) { }
  ngOnInit(): void {
    console.log('asasasasas',this.imgUrl )
  }

  public backButtonHandler(): void {
    this.store.dispatch(RouterActions.back())
  }
}
