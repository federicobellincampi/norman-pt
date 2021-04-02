import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../../../../core/core.module';
import { getMuscleGroupSelected } from '../../store/selectors/muscle-group.selectors';
import { LevelModel } from '../../../../../../models/muscle-group';
import { getCardLevels } from '../../store/selectors/cards-training.selectors'
import * as MuscleGroupActions from '../../store/actions/muscle-group.actions';
// import * as CardsTrainingActions from "../../store/actions/cards-training.actions";
import * as LevelsActions from "../../store/actions/levels.actions";
import { getLevels } from '../../store/selectors/levels.selectors';

@Component({
  selector: 'nf-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss'],
})
export class LevelComponent {

  public getMuscleGroupSelected$: Observable<any> = this.store.pipe(select(getMuscleGroupSelected))
  public getLevels$: Observable< any> = this.store.pipe(select(getLevels))

  constructor(private store: Store<AppState>) { 
    this.store.dispatch(LevelsActions.loadLevels())
    // this.store.dispatch(CardsTrainingActions.loadCardLevels())
  }

  public navToCardTrainer(levelSelected: string): void {
    this.store.dispatch(MuscleGroupActions.levelSelected( { levelSelected } ))
  }


}
