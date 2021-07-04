import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ExerciseModel } from '../../../../../../models/muscle-group';
import { AppState } from '../../../../../../core/core.module';
import { getExercieses } from '../../../../../tabs/containers/workouts/store/selectors/exercises.selectors';
import { getLevelSelected, getMuscleGroupSelected } from '../../store/selectors/muscle-group.selectors';
import * as ExercisesActions from '../../../../../tabs/containers/workouts/store/actions/exercises.action';
import * as RouterActions from '../../../../../../core/router/store/router.actions';

@Component({
  selector: 'nf-card-trainer',
  templateUrl: './card-trainer.component.html',
  styleUrls: ['./card-trainer.component.scss'],
})
export class CardTrainerComponent {

  public getExercieses$: Observable<ExerciseModel[][]> = this.store.pipe(select(getExercieses));
  public getLevelSelected$: Observable<string> = this.store.pipe(select(getLevelSelected));
  public getMuscleGroupSelected$: Observable<string> = this.store.pipe(select(getMuscleGroupSelected))
  public openModal: boolean = false;

  constructor(private store: Store<AppState>) { 
    this.store.dispatch(ExercisesActions.loadExercises());
  }

  public backButtonHandler(): void {
    this.store.dispatch(RouterActions.back())
  }

}
