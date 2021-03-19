import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonSelectComponent } from './button-select.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [ButtonSelectComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ButtonSelectComponent]
})
export class ButtonSelectModule { }
