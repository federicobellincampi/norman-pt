import { Component, HostBinding } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../../../../core/core.module';
import { getImgUrl, getMuscleGroupSelected } from '../../store/selectors/muscle-group.selectors';
import { LevelModel } from '../../../../../../models/muscle-group';
import { getLevels } from '../../store/selectors/levels.selectors';
import * as MuscleGroupActions from '../../store/actions/muscle-group.actions';
import * as LevelsActions from "../../store/actions/levels.actions";
import * as RouterActions from '../../../../../../core/router/store/router.actions';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'nf-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss'],
})
export class LevelComponent {

  public getMuscleGroupSelected$: Observable<string> = this.store.pipe(select(getMuscleGroupSelected))
  public getImgUrl$: Observable<string> = this.store.pipe(select(getImgUrl))
  public getLevels$: Observable<LevelModel> = this.store.pipe(select(getLevels))

  @HostBinding("style.--some-var")
  private value: string ="https://firebasestorage.googleapis.com/v0/b/app-norman-pt.appspot.com/o/uomo%2Fimg%2Fpetto-braccia-spalle.png?alt=media&token=de931f64-1303-4f9f-852a-2c15e355b2db";

  @HostBinding("attr.style")
  public get valueAsStyle(): any {
    return this.sanitizer.bypassSecurityTrustStyle(`--some-var: ${this.value}`);
  }

  constructor(private store: Store<AppState>, private sanitizer: DomSanitizer) { 
    this.store.dispatch(LevelsActions.loadLevels())
  }

  public navToCardTrainer(levelSelected: string): void {
    this.store.dispatch(MuscleGroupActions.levelSelected( { levelSelected } ))
  }

  public backButtonHandler(): void {
    this.store.dispatch(RouterActions.back())
  }

}
