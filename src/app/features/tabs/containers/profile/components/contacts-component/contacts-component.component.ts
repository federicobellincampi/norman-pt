import { Component } from "@angular/core";

@Component({
  selector: "nf-contacts-component",
  template: `
    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button>
        <ion-icon name="send"></ion-icon>
      </ion-fab-button>
      <ion-fab-list side="top">
        <ion-fab-button
          style=" --background: linear-gradient(to top right, #39BABE, #39988D, #4A8B8B, #68F136, #FAFFF3 );"
        >
          <ion-icon name="logo-whatsapp"></ion-icon>
        </ion-fab-button>
      </ion-fab-list>
      <ion-fab-list side="start">
        <ion-fab-button
          style=" --background: linear-gradient(to bottom right, #515bd4, #8134af, #dd247b, #feda77, #f58529);"
        >
          <ion-icon name="logo-instagram"></ion-icon>
        </ion-fab-button>
      </ion-fab-list>
    </ion-fab>
  `,
  styles: [
    `
      ion-fab {
        position: fixed;
      }

      ion-fab-button {
        --background: #474747;
      }

      ion-fab-list {
        color: #fff;
        ion-icon {
          font-size: 3vh;
          color: white;
        }
      }
    `,
  ],
})
export class ContactsComponentComponent {}
