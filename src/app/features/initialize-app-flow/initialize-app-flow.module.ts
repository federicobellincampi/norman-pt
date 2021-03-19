/* Angular */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { InitializeAppFlowRoutingModule } from './initialize-app-flow-routing.module';
import { IonicModule } from '@ionic/angular';

/* Store */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers/index';
import { GenderEffects } from './store/effects/gender.effects';
import { GoalTrainingEffect } from './store/effects/goal-training.effects';

/* Components */
import { InitializeAppFlowComponent } from './initialize-app-flow.component';

/* Services */
import { goToStep2Guard } from './services/guards/goToStep2.guard';
import { TransformAnimationService } from '../../animations/transform-animation.service';

@NgModule({
  declarations: [
    InitializeAppFlowComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    InitializeAppFlowRoutingModule,
    StoreModule.forFeature('initAppFlow', reducers),
    EffectsModule.forFeature([
      GenderEffects,
      GoalTrainingEffect
    ]),
  ],
  providers: [
    goToStep2Guard,
    TransformAnimationService
  ],
  exports:[]
})
export class InitializeAppFlowModule { }
