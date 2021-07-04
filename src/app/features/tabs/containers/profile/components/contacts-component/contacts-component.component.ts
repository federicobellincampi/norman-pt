import { Component } from "@angular/core";
import { InAppBrowser, InAppBrowserObject } from '@ionic-native/in-app-browser/ngx';
import { AppAvailability } from '@ionic-native/app-availability/ngx';
import { Platform } from "@ionic/angular";
@Component({
  selector: "nf-contacts-component",
  template: `
    <ion-item (click)="openInstagram('normantrainer')">
      <ion-label style="text-decoration: underline;}"
        >Normantrainer
      </ion-label>
      <div class="container-icon">
        <ion-icon name="logo-instagram"></ion-icon>
      </div>
    </ion-item>
  `,
  styles: [
    `
      ion-fab {
        position: fixed;
      }

      ion-fab-button {
        --background: #474747;
        --color: white;
      }

      ion-label {
        font-size: 2.5vh !important;
      }

      ion-item {
        --background: black;
        position: fixed;
        bottom: 3%;
        right: 3%;
        text-align: end;
        color: white;
      }

      .container-icon {
        height: 5vh;
        width: 5vh;
        background: linear-gradient(
          to bottom right,
          #515bd4,
          #8134af,
          #dd247b,
          #feda77,
          #f58529
        );
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      ion-icon {
        font-size: 4vh;
        color: white;
      }
    `,
  ],
})
export class ContactsComponentComponent {
  constructor(
    private inAppBrowser: InAppBrowser,
    private appAvailability: AppAvailability, 
    private platform: Platform
    ) {}

  public openInstagram(name: string, id?: string): void {
    this.launchApp(
      "instagram://",
      "com.instagram.android",
      "instagram://user?username=" + name,
      "instagram://user?username=" + name,
      "https://www.instagram.com/" + name
    );
  }

  private launchApp(
    iosApp: string,
    androidApp: string,
    appUrlIOS: string,
    appUrlAndroid: string,
    webUrl: string
  ) {
    let app: string;
    let appUrl: string;
    // check if the platform is ios or android, else open the web url
    if (this.platform.is("ios")) {
      app = iosApp;
      appUrl = appUrlIOS;
    } else if (this.platform.is("android")) {
      app = androidApp;
      appUrl = appUrlAndroid;
    } else {
      const browser: InAppBrowserObject = this.inAppBrowser.create(
        webUrl,
        "_system"
      );
      return;
    }
    this.appAvailability.check(app).then(
      () => {
        // success callback, the app exists and we can open it
        const browser: InAppBrowserObject = this.inAppBrowser.create(
          appUrl,
          "_system"
        );
      },
      () => {
        // error callback, the app does not exist, open regular web url instead
        const browser: InAppBrowserObject = this.inAppBrowser.create(
          webUrl,
          "_system"
        );
      }
    );
  }
}
