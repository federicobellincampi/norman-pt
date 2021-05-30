import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { of } from "rxjs";
import {
  catchError,
  map,
  switchMap,
  withLatestFrom,
} from "rxjs/operators";
import { getProfile } from "../../../../../../core/profile/store/profile.selectors";
import { AppState } from "../../../../../../core/core.module";
import { GetCardsTrainingService } from "../../services/get-cards-training.service";
import { DB } from "../../../../../../models/db.model";
import * as CardsTrainingActions from "../actions/cards-training.actions";
@Injectable()
export class CardsTrainingEffects {

  getCardsTraining$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardsTrainingActions.loadCardsTraining),
      withLatestFrom(this.store.pipe(select(getProfile))),
      switchMap(([action, user]: [{type: string}, {gender: 'uomo'|'donna', goalTraining: 'massa muscolare' | 'perdere peso' | 'tonificarsi'}]) => {
        return this.getCardsTrainingService
            .getCardsTrainingDB()
            .pipe(
              map((cards: DB) =>
                CardsTrainingActions.loadCardsTrainingSuccess({ 
                  cards: cards.schedeAllenamento[user.gender][user.goalTraining.split(' ').map(word => word.charAt(0).toLowerCase() + word.substring(1) ).join('')] 
                })
              ),
              catchError((error) =>
                of(CardsTrainingActions.loadCardsTrainingFailed({ error }))
              )
            );
      })
    ),
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private getCardsTrainingService: GetCardsTrainingService,
    // private localStorageService: LocalStorageService
  ) {}
}
