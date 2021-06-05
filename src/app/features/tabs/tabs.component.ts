import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { Subject } from "rxjs";
import { filter, takeUntil } from "rxjs/operators";
@Component({
  selector: "nf-tabs",
  template: `
    <ion-tabs mode="ios" >
      <ion-tab-bar slot="bottom" [ngClass]="{'hide': !showTabs, 'show': showTabs}">
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

      .hide{
        display: none;
      }

      .show{
        display: flex;
      }
    `,
  ],
})
export class TabsComponent implements OnInit {

  closed$ = new Subject<any>();
  showTabs = true; 

  constructor(private _router: Router) { }

  public ngOnInit(): void  {
    this._router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      takeUntil(this.closed$)
    ).subscribe(event => {
      if (event['url'] === '/tabs/workouts/level' || event['url'] === '/tabs/workouts/card-trainer') {
        this.showTabs = false;
      } else {
        this.showTabs = true;
      }
    });
  }
  
  public ngOnDestroy(): void {
    this.closed$.next();
  }
  
}
