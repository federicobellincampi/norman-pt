import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { combineLatest, forkJoin, of } from "rxjs";
import {
  catchError,
  map,
  mapTo,
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
import { MuscleGroupModel } from "../../../../../../models/muscle-group";
import { LocalStorageService } from "src/app/core/services/local-storage.service";
import * as CardsTrainingActions from "../actions/cards-training.actions";

@Injectable()
export class CardsTrainingEffects {

  getCardsTraining$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardsTrainingActions.loadCardsTraining),
      switchMapTo(this.store.pipe(select(selectUser))),
      switchMap((user: User) => {
        if (!this.localStorageService.gestLocalStorage(user.gender + "-" + user.goalTraining)) {
          console.log("no cache");
          return this.getCardsTrainingService
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
            );
        } else {
          console.log('cache')
          this.store.dispatch( CardsTrainingActions.loadCardsTrainingSuccess({
            cards: this.localStorageService.gestLocalStorage(
              user.gender + "-" + user.goalTraining
            ),
          }))        
        }
      })
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
            if (!this.localStorageService.gestLocalStorage(user.gender + "-" + user.goalTraining)) { 
              this.localStorageService.setLocalStorage(
                user.gender + "-" + user.goalTraining,
                action.cards
              );
            }
          }
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
