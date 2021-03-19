import { Component } from "@angular/core";
import { Store } from '@ngrx/store';
import { AppState } from '../../core/core.module';
import * as RouterActions from '../../core/router/store/router.actions';

@Component({
  selector: "nf-initialize-app-flow",
  template: `
    <ion-content>
      <ion-button 
        (click)="goToStep1()"
        color="success"
      >
        Iniziamo
      </ion-button>
    </ion-content>
  `,
  styles: [`
    ion-content {
      --background: url(../../../assets/gif/norman-pt-init.gif) 0 0/100% 100% no-repeat;
    }
  `],
})
export class InitializeAppFlowComponent {
  constructor(private store: Store<AppState>) {}

  goToStep1() {
    this.store.dispatch(RouterActions.go({ path: ['init-flow/step1'] }));
  }
}
