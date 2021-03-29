import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, map, switchMap, switchMapTo, tap } from "rxjs/operators";
import { selectUser } from "../../../../../../core/profile/store/profile.selectors";
import { AppState } from "../../../../../../core/core.module";
import { User } from "../../../../../../models/user.model";
import { GetCardsTrainingService } from "../../services/get-cards-training.service";
import * as CardsTrainingActions from '../actions/cards-training.actions';

@Injectable()
export class CardsTrainingEffects {

    getCardsTraining$ = createEffect(() => this.actions$
        .pipe(
            ofType(CardsTrainingActions.loadCardsTraining),
            switchMapTo( this.store.pipe(select(selectUser))),
            switchMap((user: User) => 
                this.getCardsTrainingService.getCardsTraining(`schede-allenamento/${user.gender}/${user.goalTraining.replace(/\s/g, '-')}`).pipe(
                    map(cards => CardsTrainingActions.loadCardsTrainingSuccess({ cards }) ),
                    catchError((error) => of(CardsTrainingActions.loadCardsTrainingFailed({ error })) )
                )
            )
        )
    )

    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private getCardsTrainingService: GetCardsTrainingService
        ) {}

}