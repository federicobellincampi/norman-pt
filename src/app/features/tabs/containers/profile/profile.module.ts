import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileComponent } from "./profile.component";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from '@ionic/angular';
import { SharedModule } from "src/app/shared/shared.module";
import { StoreModule } from "@ngrx/store";
import { reducer as saveChangesReducer } from "./store/reducers/save-changes.reducer";
import { ContactsComponentComponent } from "./components/contacts-component/contacts-component.component";
import { SelectComponentComponent } from "./components/select-component/select-component.component";

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
    StoreModule.forFeature( 'save-changes', saveChangesReducer )
  ],
})
export class ProfileModule {}
