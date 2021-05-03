import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { of } from "rxjs";
import {
  catchError,
  map,
  switchMap,
  tap,
  withLatestFrom,
} from "rxjs/operators";
import { getProfile } from "../../../../../../core/profile/store/profile.selectors";
import { AppState } from "../../../../../../core/core.module";
import { User } from "../../../../../../models/user.model";
import { GetCardsTrainingService } from "../../services/get-cards-training.service";
import { MuscleGroupModel } from "../../../../../../models/muscle-group";
import { LocalStorageService } from "src/app/core/services/local-storage.service";
import * as CardsTrainingActions from "../actions/cards-training.actions";

@Injectable()
export class CardsTrainingEffects {

  checkCacheCardsTraining$ = createEffect(() => 
  this.actions$.pipe(
    ofType(CardsTrainingActions.checkCacheCardsTraining),
    withLatestFrom(this.store.pipe(select(getProfile))),
    map(([action, profile]: [{type: string}, {gender: 'uomo'|'donna', goalTraining: 'massa muscolare' | 'perdere peso' | 'tonificarsi'}]) => {
      console.log('ceck',profile.gender + "-" + profile.goalTraining);
      if(!this.localStorageService.gestLocalStorage(profile.gender + "-" + profile.goalTraining)) {
        console.log('no cache');
        this.store.dispatch(CardsTrainingActions.loadCardsTraining())
      } else {
        console.log('cache')
        this.store.dispatch(
          CardsTrainingActions.loadCardsTrainingSuccess({
            cards: this.localStorageService.gestLocalStorage(
              profile.gender + "-" + profile.goalTraining
            ),
          })
        )
      }
    })
  ),
  { dispatch: false }
  );

  getCardsTraining$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardsTrainingActions.loadCardsTraining),
      withLatestFrom(this.store.pipe(select(getProfile))),
      switchMap(([action, user]: [{type: string}, {gender: 'uomo'|'donna', goalTraining: 'massa muscolare' | 'perdere peso' | 'tonificarsi'}]) => {
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
      })
    )
  );

  loadCardsTrainingSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CardsTrainingActions.loadCardsTrainingSuccess),
        withLatestFrom(this.store.pipe(select(getProfile))),
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
