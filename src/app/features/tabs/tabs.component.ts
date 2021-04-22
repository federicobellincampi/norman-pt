import { Component } from '@angular/core';

@Component({
  selector: 'nf-tabs',
  template: `
    <ion-tabs mode="ios">
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="workouts">
        <ion-icon name="barbell-outline"></ion-icon>          
        <ion-label>Allenamenti</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="profile">
        <ion-icon name="person-sharp"></ion-icon>
        <ion-label>Profilo</ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
  `,
  styles: [`

    ion-tab-bar {
      --background: black;
      --border: black;
      /* --color: white; */

    }

    ion-label {
      font-family: 'Lato';
      font-size: 12px;

    }
    
    ion-tab-button {
      --color-selected: white;
    }

  `],
})
export class TabsComponent { }
