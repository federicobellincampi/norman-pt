import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenderSelectComponent } from './gender-select.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [GenderSelectComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [GenderSelectComponent]
})
export class GenderSelectModule { }
