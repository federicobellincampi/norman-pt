import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTrainerComponent } from './card-trainer.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
@NgModule({
  declarations: [
    CardTrainerComponent,
    ExerciseComponent,
    InfoCardComponent
  ],
  imports: [
    CommonModule,
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
