import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTrainerComponent } from './card-trainer.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [CardTrainerComponent],
  imports: [
    CommonModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: CardTrainerComponent
      }
    ])
  ]
})
export class CardTrainerModule { }
