import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { map, mergeMapTo, take, tap, withLatestFrom } from "rxjs/operators";
import { AppState } from "../../../../core/core.module";
import { getGoalTrainingState } from "../selectors/goal-training.selectors";
import { GoalTrainingState } from "../reducers/goal-training.reducer";
import { getFooterDisable } from "../selectors/ui.selectors";
import { getGenderState } from "../selectors/gender.selectors";
import { GenderState } from "../reducers/gender.reducer";
import * as GoalTrainingActions from '../actions/goal-training.actions';
import * as ProfileActions from '../../../../core/profile/store/profile.actions';
import * as UiActions from '../actions/ui.actions';
@Injectable()
export class GoalTrainingEffect {
    checkGoalTrainingSelected$ = createEffect(
        () => 
            this.actions$.pipe(
                ofType(GoalTrainingActions.checkGoalTrainingSelected),
                mergeMapTo(this.store.pipe(select(getGoalTrainingState))
                    .pipe(
                      take(1),
                      withLatestFrom(
                        this.store.pipe(select(getGenderState))
                      ),
                      map(([goalTrainingState, genderState]: [GoalTrainingState, GenderState]) => {
                        if(genderState.manSelected){
                          if(!goalTrainingState.muscleMassSelected && !goalTrainingState.loseWeightSelected) {
                             this.store.dispatch(UiActions.footerDisable());
                          }
                        } else {
                          if(!goalTrainingState.toningSelected && !goalTrainingState.loseWeightSelected) {
                            this.store.dispatch(UiActions.footerDisable());
                          }
                        }
                      })
                    )
                )
            ),
        { dispatch: false }
    );

    muscleMassSelected$ = createEffect(
        () =>
          this.actions$.pipe(
            ofType(GoalTrainingActions.muscleMassSelected),
            tap(() => {
              this.store.dispatch(ProfileActions.saveProfileGoalTraining({ goalTraining: 'massa muscolare' }))
            }),
            mergeMapTo(
              this.store.pipe(select(getFooterDisable))
              .pipe(
                take(1),
                map((footerDisable: boolean) => {
                  if(footerDisable) {
                    this.store.dispatch(UiActions.footerActive())
                  }
                })
              )
            )
          ),
        { dispatch: false }
      );

      toningSelected$ = createEffect(
        () =>
          this.actions$.pipe(
            ofType(GoalTrainingActions.toningSelected),
            tap(() => {
              this.store.dispatch(ProfileActions.saveProfileGoalTraining({ goalTraining: 'tonificarsi' }))
            }),
            mergeMapTo(this.store.pipe(select(getFooterDisable))
              .pipe(
                take(1),
                map((footerDisable: boolean) => {
                  if(footerDisable) {
                    this.store.dispatch(UiActions.footerActive())
                  }
                })
              )
            )
          ),
        { dispatch: false }
      );

      loseWeightSelected$ = createEffect(
        () =>
          this.actions$.pipe(
            ofType(GoalTrainingActions.loseWeightSelected),
            tap(() => {
              this.store.dispatch(ProfileActions.saveProfileGoalTraining({ goalTraining: 'perdere peso' }))
            }),
            mergeMapTo(this.store.pipe(select(getFooterDisable))
              .pipe(
                take(1),
                map((footerDisable: boolean) => {
                  if(footerDisable) {
                    this.store.dispatch(UiActions.footerActive())
                  }
                })
              )
            )
          ),
        { dispatch: false }
      );

    constructor(private actions$: Actions, private store: Store<AppState>) {}
}