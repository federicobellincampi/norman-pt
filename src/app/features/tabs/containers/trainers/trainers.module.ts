/* Angular/Ionic */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

/* Modules */
import { SharedModule } from '../../../../shared/shared.module';
import { TrainersRoutingModule } from './trainers-routing.module';

/* Store */
import { StoreModule } from '@ngrx/store';
import { CardsTrainingEffects } from './store/effects/cards-training.effects';
import { reducer as cardsTrainingReducer } from './store/reducers/cards-training.reducer';

/* Services */
import { GetCardsTrainingService } from './services/get-cards-training.service';

/* Firestore */
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from "../../../../../environments/environment";

/* Components */
import { TrainersComponent } from './trainers.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { EffectsModule } from '@ngrx/effects';
import { SelectCardComponent } from './components/select-card/select-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    TrainersRoutingModule,
    StoreModule.forFeature('cards-training', cardsTrainingReducer),
    EffectsModule.forFeature([CardsTrainingEffects]),
  ],
  declarations: [
    TrainersComponent,
    ExerciseComponent,
    SelectCardComponent
  ],
  providers: [GetCardsTrainingService]
})
export class TrainersModule {}
