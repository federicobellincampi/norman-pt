import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../../../shared/shared.module';
import { InfoItemComponent } from './components/info-item/info-item.component';

export const routes: Routes = [
  {
    path: '',
    component: InfoComponent,
  },
];

@NgModule({
  declarations: [InfoComponent, InfoItemComponent],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class InfoModule { }
