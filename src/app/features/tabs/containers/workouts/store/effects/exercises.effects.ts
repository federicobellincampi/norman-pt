import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { combineLatest } from "rxjs";
import { map, switchMapTo, take } from "rxjs/operators";
import { AppState } from "src/app/core/core.module";
import {
    getLevelSelected,
    getMuscleGroupSelected,
  } from "../selectors/muscle-group.selectors";
import { getCardsTrainer } from "../selectors/cards-training.selectors";
import { MuscleGroupModel } from "../../../../../../models/muscle-group";
import * as ExercisesAction from "../actions/exercises.action";


@Injectable()
export class ExercisesEffects {

loadExercises$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ExercisesAction.loadExercises),
        take(1),
        switchMapTo(
          combineLatest([
            this.store.pipe(select(getMuscleGroupSelected)),
            this.store.pipe(select(getLevelSelected)),
            this.store.pipe(select(getCardsTrainer)),
          ]).pipe(
            map((cards: [string, string, MuscleGroupModel[]]) => {
              this.store.dispatch(
                ExercisesAction.loadExercisesSuccess({
                  exercies: cards[2]
                    .filter((val) => val.titolo === cards[0])
                    .map(
                      (val) =>
                        val.schede[
                          cards[1].toLocaleLowerCase().replace(/\s/g, "")
                        ]
                    ),
                })
              );
            })
          )
        )
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
  ) {}

}