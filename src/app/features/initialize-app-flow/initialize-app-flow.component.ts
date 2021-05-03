import { Component } from "@angular/core";
import { Store } from '@ngrx/store';
import { AppState } from '../../core/core.module';
import * as RouterActions from '../../core/router/store/router.actions';

@Component({
  selector: "nf-initialize-app-flow",
  template: `
    
    <video playsinline autoplay="autoplay" loop="loop" muted="muted" id="video-back"
      poster="./assets/img/poster-video.png"
    >
        <source src="./assets/video/prova.mp4" type="video/mp4">
      </video>

      <img src="./assets/img/logo-trainer.svg">
    
      <ion-button mode="ios"
        (click)="goToStep1()"
      >
        Iniziamo
      </ion-button>


  `,
  styles: [`
    ion-content {
      --padding-end: 0;
      --padding-start: 0;
    }

    ion-button {
      position: absolute;
      bottom: 15%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 20px;
      border: 2px solid white;
      border-radius: 50px;
      --background: transparent;
      --background-activated: black;
      --border-radius: 50px;
    }

    img {
      position: absolute;
      bottom: 30%;
      left: 0;
    }

    #video-back {
      position: fixed;
      height: 100%;
    }

  `],
})
export class InitializeAppFlowComponent {
  constructor(private store: Store<AppState>) {}

  goToStep1() {
    this.store.dispatch(RouterActions.go({ path: ['init-flow/step1'] }));
  }
}
