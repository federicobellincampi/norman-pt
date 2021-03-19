import { Component } from '@angular/core';

@Component({
  selector: 'nf-tabs',
  template: `
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home">
          <ion-icon name="home-sharp"></ion-icon>
          <ion-label>Home</ion-label>
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
      --color: white;
      --ripple-color: 
    }

  `],
})
export class TabsComponent { }
