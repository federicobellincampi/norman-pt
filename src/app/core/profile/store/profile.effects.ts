import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { switchMapTo, tap } from 'rxjs/operators';
import { AppState } from '../../core.module';
import { LocalStorageService } from '../../services/local-storage.service';
import { getProfile } from './profile.selectors';
import * as ProfileActions from './profile.actions';


@Injectable()
export class ProfileEffects {

    saveProfile$ = createEffect(() => this.actions$
        .pipe(
            ofType(ProfileActions.saveProfile),
            switchMapTo(this.store.pipe(select(getProfile))),
            tap(action => this.localStorageService.saveUser(action))
        ), {dispatch: false}
    );

    saveProfileGoalTraining$ = createEffect(() => this.actions$
    .pipe(
        ofType(ProfileActions.saveProfileGoalTraining),
        switchMapTo(this.store.pipe(select(getProfile))),
        tap(action => this.localStorageService.saveUser(action))
    ), {dispatch: false}
);

    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private localStorageService: LocalStorageService
    ) {}
}
