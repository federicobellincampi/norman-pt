import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { map, mergeMap, mergeMapTo, switchMapTo, tap, withLatestFrom } from "rxjs/operators";
import { AppState } from "../../../../core/core.module";
import { getLoseWeightSelected, getMuscleMassSelected, getToningSelected, getGoalTrainingState } from "../selectors/goal-training.selectors";
import { GoalTrainingState } from "../reducers/goal-training.reducer";
import { getGoalTrainingProfile } from "../../../../core/profile/store/profile.selectors";
import * as GoalTrainingActions from '../actions/goal-training.actions';
import * as ProfileActions from '../../../../core/profile/store/profile.actions';
import * as UiActions from '../actions/ui.actions';
import { getFooterDisable } from "../selectors/ui.selectors";

@Injectable()
export class GoalTrainingEffect {
    checkGoalTrainingSelected$ = createEffect(
        () => 
            this.actions$.pipe(
                ofType(GoalTrainingActions.checkGoalTrainingSelected),
                mergeMapTo(this.store.pipe(select(getGoalTrainingState))
                    .pipe(
                        map((val: GoalTrainingState) => {
                            if(!val.muscleMassSelected && !val.loseWeightSelected && !val.toningSelected) {
                                this.store.dispatch(UiActions.footerDisable());
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
            mergeMapTo(this.store.pipe(select(getFooterDisable))
              .pipe(
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
              this.store.dispatch(ProfileActions.saveProfileGoalTraining({ goalTraining: 'tonificazione' }))
            }),
            mergeMapTo(this.store.pipe(select(getFooterDisable))
              .pipe(
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
              this.store.dispatch(ProfileActions.saveProfileGoalTraining({ goalTraining: 'perdita di peso' }))
            }),
            mergeMapTo(this.store.pipe(select(getFooterDisable))
              .pipe(
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