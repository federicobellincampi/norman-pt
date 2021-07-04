/* Angular/Ionic */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

/* Modules */
import { SharedModule } from '../../../../shared/shared.module';
import { workoutsRoutingModule } from './workouts-routing.module';

/* Store */
import { StoreModule } from '@ngrx/store';
import { CardsTrainingEffects } from './store/effects/cards-training.effects';
import { reducers } from './store/reducers/index';
import { MuscleGroupEffects } from './store/effects/muscle-group.effects';
import { EffectsModule } from '@ngrx/effects';
import { LevelsEffects } from './store/effects/levels.effects';
import { ExercisesEffects } from './store/effects/exercises.effects';

/* Services */
import { GetCardsTrainingService } from './services/get-cards-training.service';

/* Components */
import { WorkoutsComponent } from './workouts.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    workoutsRoutingModule,
    HttpClientModule,
    StoreModule.forFeature('workouts', reducers),
    EffectsModule.forFeature(
      [
        CardsTrainingEffects,
        MuscleGroupEffects,
        LevelsEffects,
        ExercisesEffects
      ]
    ),
  ],
  declarations: [
    WorkoutsComponent,
  ],
  providers: [
    GetCardsTrainingService,
    ]
})
export class TrainersModule {}
