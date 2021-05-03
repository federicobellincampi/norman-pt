import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileComponent } from "./profile.component";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from '@ionic/angular';
import { SharedModule } from "src/app/shared/shared.module";
import { ContactsComponentComponent } from "./components/contacts-component/contacts-component.component";
import { SelectComponentComponent } from "./components/select-component/select-component.component";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { AppAvailability } from "@ionic-native/app-availability/ngx";

export const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
  },
];

@NgModule({
  declarations: [
    ProfileComponent,
    ContactsComponentComponent,
    SelectComponentComponent
  ],
  imports: [
    CommonModule, 
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  providers:[
    InAppBrowser,
    AppAvailability
  ]
})
export class ProfileModule {}
