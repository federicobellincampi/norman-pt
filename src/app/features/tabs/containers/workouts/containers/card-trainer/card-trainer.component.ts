import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ExerciseModel } from '../../../../../../models/muscle-group';
import { AppState } from '../../../../../../core/core.module';
import { getExercieses } from '../../../../../tabs/containers/workouts/store/selectors/cards-training.selectors';
import * as CardsTrainingActions from '../../../../../tabs/containers/workouts/store/actions/cards-training.actions';
import * as RouterActions from '../../../../../../core/router/store/router.actions';

@Component({
  selector: 'nf-card-trainer',
  templateUrl: './card-trainer.component.html',
  styleUrls: ['./card-trainer.component.scss'],
})
export class CardTrainerComponent {

  public getExercieses$: Observable<ExerciseModel[][]> = this.store.pipe(select(getExercieses));

  constructor(private store: Store<AppState>) { 
    this.store.dispatch(CardsTrainingActions.loadExercises());
  }

  public backButtonHandler(): void {
    this.store.dispatch(RouterActions.back())
  }

}
