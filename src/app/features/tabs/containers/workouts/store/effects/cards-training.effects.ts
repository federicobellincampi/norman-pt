import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { combineLatest, forkJoin, of } from "rxjs";
import {
  catchError,
  map,
  mergeMap,
  switchMap,
  switchMapTo,
  take,
  tap,
  withLatestFrom,
} from "rxjs/operators";
import { selectUser } from "../../../../../../core/profile/store/profile.selectors";
import { AppState } from "../../../../../../core/core.module";
import { User } from "../../../../../../models/user.model";
import { GetCardsTrainingService } from "../../services/get-cards-training.service";
import {
  getLevelSelected,
  getMuscleGroupSelected,
} from "../selectors/muscle-group.selectors";
import { getCardsTrainer } from "../selectors/cards-training.selectors";
import { MuscleGroupModel } from "../../../../../../models/muscle-group";
import { LocalStorageService } from "src/app/core/services/local-storage.service";
import * as CardsTrainingActions from "../actions/cards-training.actions";

@Injectable()
export class CardsTrainingEffects {
  getCardsTraining$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardsTrainingActions.loadCardsTraining),
      switchMapTo(this.store.pipe(select(selectUser))),
      switchMap((user: User) =>
        this.getCardsTrainingService
          .getCardsTraining(
            `schede-allenamento/${user.gender}/${user.goalTraining.replace(
              /\s/g,
              "-"
            )}`
          )
          .pipe(
            map((cards) =>
              CardsTrainingActions.loadCardsTrainingSuccess({ cards })
            ),
            catchError((error) =>
              of(CardsTrainingActions.loadCardsTrainingFailed({ error }))
            )
          )
      )
    )
  );

  loadCardsTrainingSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CardsTrainingActions.loadCardsTrainingSuccess),
        withLatestFrom(this.store.pipe(select(selectUser))),
        tap(
          ([action, user]: [
            { cards: MuscleGroupModel[]; type: string },
            User
          ]) => {
            console.log(
              this.localStorageService.gestLocalStorage(
                user.gender + "-" + user.goalTraining
              )
            );
            console.log(action.cards);
            this.localStorageService.setLocalStorage(
              user.gender + "-" + user.goalTraining,
              action.cards
            );
          }
        )
      ),
    { dispatch: false }
  );

  loadExercises$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CardsTrainingActions.loadExercises),
        take(1),
        switchMapTo(
          combineLatest([
            this.store.pipe(select(getMuscleGroupSelected)),
            this.store.pipe(select(getLevelSelected)),
            this.store.pipe(select(getCardsTrainer)),
          ]).pipe(
            map((cards: [string, string, MuscleGroupModel[]]) => {
              this.store.dispatch(
                CardsTrainingActions.loadExercisesSuccess({
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

  loadCardLevels$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CardsTrainingActions.loadCardLevels),
        take(1),
        switchMapTo(
          combineLatest([
            this.store.pipe(select(getMuscleGroupSelected)),
            this.store.pipe(select(getCardsTrainer)),
          ]).pipe(
            map((cards: [string, MuscleGroupModel[]]) => {
              this.store.dispatch(
                CardsTrainingActions.loadCardLevelsSuccess({
                  cardLevels: cards[1]
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
    private getCardsTrainingService: GetCardsTrainingService,
    private localStorageService: LocalStorageService
  ) {}
}
