/* Angular/Ionic */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

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

/* Services */
import { GetCardsTrainingService } from './services/get-cards-training.service';

/* Firestore */
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from "../../../../../environments/environment";

/* Components */
import { workoutsComponent } from './workouts.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    workoutsRoutingModule,

    StoreModule.forFeature('workouts', reducers),
    EffectsModule.forFeature(
      [
        CardsTrainingEffects,
        MuscleGroupEffects,
        LevelsEffects
      ]
    ),
  ],
  declarations: [
    workoutsComponent,
  ],
  providers: [
    GetCardsTrainingService
  ]
})
export class TrainersModule {}
