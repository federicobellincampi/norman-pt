import { Component } from '@angular/core';

@Component({
  selector: 'nf-tabs',
  template: `
    <ion-tabs>
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
      --background: #212121;
      --border: #212121;
      --color: white;
    }

    ion-label {
      font-family: 'Lato';
      font-size: 12px;

    }
    
    ion-icon {
    }

  `],
})
export class TabsComponent { }
