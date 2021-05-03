import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { mapTo, tap } from "rxjs/operators";
import { AppState } from "../../../../../../core/core.module";
import { GetCardsTrainingService } from "../../services/get-cards-training.service";
import * as MuscleGroupActions from '../actions/muscle-group.actions';
import * as RooterActions from '../../../../../../core/router/store/router.actions';

@Injectable()
export class MuscleGroupEffects {

    muscleGroupSelected$ = createEffect(() => this.actions$
        .pipe(
            ofType(MuscleGroupActions.muscleGroupSelected),
            tap( () => this.store.dispatch(RooterActions.go({ path: ['/tabs/workouts/level']} )))
        ),
        { dispatch: false }
    )

    levelSelected$ = createEffect(() => this.actions$
    .pipe(
        ofType(MuscleGroupActions.levelSelected),
        tap( () => this.store.dispatch(RooterActions.go({ path: ['/tabs/workouts/card-trainer']} )))
    ),
    { dispatch: false }
)

    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private getCardsTrainingService: GetCardsTrainingService
        ) {}

}