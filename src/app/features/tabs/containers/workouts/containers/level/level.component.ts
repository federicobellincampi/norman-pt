import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../../../../core/core.module';
import { getImgUrl, getMuscleGroupSelected } from '../../store/selectors/muscle-group.selectors';
import { LevelModel } from '../../../../../../models/muscle-group';
import { getLevels } from '../../store/selectors/levels.selectors';
import * as MuscleGroupActions from '../../store/actions/muscle-group.actions';
import * as LevelsActions from "../../store/actions/levels.actions";
import * as RouterActions from '../../../../../../core/router/store/router.actions';
@Component({
  selector: 'nf-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss'],
})
export class LevelComponent {

  public getMuscleGroupSelected$: Observable<string> = this.store.pipe(select(getMuscleGroupSelected))
  public getImgUrl$: Observable<string> = this.store.pipe(select(getImgUrl))
  public getLevels$: Observable<LevelModel> = this.store.pipe(select(getLevels))

  constructor(private store: Store<AppState>) { 
    this.store.dispatch(LevelsActions.loadLevels())
  }

  public navToCardTrainer(levelSelected: string): void {
    this.store.dispatch(MuscleGroupActions.levelSelected( { levelSelected } ))
  }

  public backButtonHandler(): void {
    this.store.dispatch(RouterActions.go({ path: ['tabs/workouts']} ))
  }

}
