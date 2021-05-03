import { Component } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { AppState } from "../../core/core.module";
import { getRouter } from "../../core/router/store/router.selectors";

@Component({
  selector: "nf-tabs",
  template: `
    <ion-tabs mode="ios" >
      <ion-tab-bar slot="bottom" *ngIf="showTabs">
        <ion-tab-button tab="info">
          <ion-icon name="information-outline"></ion-icon>
          <ion-label>Info</ion-label>
        </ion-tab-button>
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
  styles: [
    `
      ion-tab-bar {
        --background: black;
        --border: black;
        /* --color: white; */
      }

      ion-label {
        font-family: "Lato";
        font-size: 12px;
      }

      ion-tab-button {
        --color-selected: white;
      }
    `,
  ],
})
export class TabsComponent {
  
  public showTabs: boolean = true;

  constructor(private store: Store<AppState>) {
    this.store.pipe(select(getRouter)).subscribe(val => {
      if(val?.state.url === '/tabs/workouts/level') this.showTabs = false;
      else if(val?.state.url === '/tabs/workouts/card-trainer') this.showTabs = false;
      else this.showTabs = true;
    })
  }
}
