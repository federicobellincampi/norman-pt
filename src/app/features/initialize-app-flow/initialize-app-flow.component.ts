import { Component } from "@angular/core";
import { Store } from '@ngrx/store';
import { AppState } from '../../core/core.module';
import * as RouterActions from '../../core/router/store/router.actions';

@Component({
  selector: "nf-initialize-app-flow",
  template: `
    <div class="video-container">
    <video  class="video-back" playsinline autoplay="autoplay" loop="loop" muted="muted"
      poster="./assets/img/poster-video.png"
    >
        <source src="./assets/video/init-video.mp4" type="video/mp4">
      </video>
    </div>


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

    .video-back {
      height: 100%;
    }

    .video-container {
      position: fixed;
      height: 100%;
    }

    .video-container::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
    background-color: rgba(0,0,0,0.25);
}

  `],
})
export class InitializeAppFlowComponent {
  constructor(private store: Store<AppState>) {}

  goToStep1() {
    this.store.dispatch(RouterActions.go({ path: ['init-flow/step1'] }));
  }
}
