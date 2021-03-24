import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { map, switchMapTo, take, tap } from "rxjs/operators";
import { AppState } from "../../core.module";
import { LocalStorageService } from "../../services/local-storage.service";
import { getProfile } from "./profile.selectors";
import * as ProfileActions from "./profile.actions";
import { User } from "../../../models/user.model";

@Injectable()
export class ProfileEffects {
  saveProfile$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProfileActions.saveProfile),
        switchMapTo(this.store.pipe(select(getProfile))
        .pipe(
            map((user: User) => this.localStorageService.saveUser(user))
        )),
      ),
    { dispatch: false }
  );

  saveProfileGoalTraining$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProfileActions.saveProfileGoalTraining),
        switchMapTo(this.store.pipe(select(getProfile))
        .pipe(
            map((user: User) => this.localStorageService.saveUser({...user, goalTraining: user.goalTraining}))
        ))
      ),
    { dispatch: false }
  );

  saveProfileGender$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProfileActions.saveProfileGender),
        switchMapTo(this.store.pipe(select(getProfile))
        .pipe(
            take(1),
            map((user: User) => {
                if(user.gender === 'uomo') {
                    if(user.goalTraining === 'massa muscolare' || user.goalTraining === 'perdere peso') {
                        this.localStorageService.saveUser(user)
                    } else {
                        this.store.dispatch(ProfileActions.saveProfileGoalTraining({ goalTraining: 'massa muscolare' }))
                        this.localStorageService.saveUser({...user, goalTraining: 'massa muscolare'})
                    }
                } else {
                    if(user.goalTraining === 'tonificarsi' || user.goalTraining === 'perdere peso') {
                        this.localStorageService.saveUser(user)
                    } else {
                        this.store.dispatch(ProfileActions.saveProfileGoalTraining({ goalTraining: 'perdere peso' }))
                        this.localStorageService.saveUser({...user, goalTraining: 'perdere peso'})
                    }
                }
            })
        )),
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private localStorageService: LocalStorageService
  ) {}
}
