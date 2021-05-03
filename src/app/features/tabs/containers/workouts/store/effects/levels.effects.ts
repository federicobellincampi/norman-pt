import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { combineLatest } from "rxjs";
import { map, switchMapTo, take } from "rxjs/operators";
import { AppState } from "../../../../../../core/core.module";
import { getMuscleGroupSelected } from "../selectors/muscle-group.selectors";
import { getCardsTrainer } from "../selectors/cards-training.selectors";
import { MuscleGroupModel } from "../../../../../../models/muscle-group";
import * as LevelsActions from "../actions/levels.actions";

@Injectable()
export class LevelsEffects {

  loadLevels$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LevelsActions.loadLevels),
        take(1),
        switchMapTo(
          combineLatest([
            this.store.pipe(select(getMuscleGroupSelected)),
            this.store.pipe(select(getCardsTrainer)),
          ]).pipe(
            map((cards: [string, MuscleGroupModel[]]) => {
              this.store.dispatch(
                LevelsActions.loadLevelsSuccess({
                  levels: cards[1]
                    .filter((val) => val.titolo === cards[0])
                    .map((val) => val.schede),
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
