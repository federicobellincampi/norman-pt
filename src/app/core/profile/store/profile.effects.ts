import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { map, switchMapTo, take, tap, withLatestFrom } from "rxjs/operators";
import { AppState } from "../../core.module";
import { LocalStorageService } from "../../services/local-storage.service";
import { getGenderProfile, getGoalTrainingProfile, getProfile } from "./profile.selectors";
import { User } from "../../../models/user.model";
import { combineLatest } from "rxjs";
import { getGoalTrainingState } from "../../../features/initialize-app-flow/store/selectors/goal-training.selectors";
import { GenderState } from "../../../features/initialize-app-flow/store/reducers/gender.reducer";
import { GoalTrainingState } from "../../../features/initialize-app-flow/store/reducers/goal-training.reducer";
import { getGenderState } from "../../../features/initialize-app-flow/store/selectors/gender.selectors";
import * as ProfileActions from "./profile.actions";
import * as CardsTrainingActions from '../../../features/tabs/containers/workouts/store/actions/cards-training.actions';

@Injectable()
export class ProfileEffects {
  saveProfile$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProfileActions.saveProfile),
        take(1),
        switchMapTo(
          combineLatest([
            this.store.pipe(select(getGenderState)),
            this.store.pipe(select(getGoalTrainingState))
          ]).pipe(
            tap((initState: [GenderState, GoalTrainingState]) => {
              if(initState[0].manSelected) {
                if(initState[1].muscleMassSelected) this.localStorageService.saveUser({ gender: 'uomo', goalTraining: 'massa muscolare' })
                else if (initState[1].loseWeightSelected) this.localStorageService.saveUser({ gender: 'uomo', goalTraining: 'perdere peso' })
              } else {
                if (initState[1].toningSelected) this.localStorageService.saveUser({ gender: 'donna', goalTraining: 'tonificarsi' })
                else if (initState[1].loseWeightSelected) this.localStorageService.saveUser({ gender: 'donna', goalTraining: 'perdere peso' })
              }
            })
          )
        )
      ),
    { dispatch: false }
  );

  // saveProfileGoalTraining$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(ProfileActions.saveProfileGoalTraining),
  //       take(1),
  //       switchMapTo(this.store.pipe(select(getProfile))
  //       .pipe(
  //           map((user: User) => this.localStorageService.saveUser({...user, goalTraining: user.goalTraining}))
  //       ))
  //     ),
  //   { dispatch: false }
  // );

  saveProfileGoalTraining$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProfileActions.saveProfileGoalTraining),
        withLatestFrom(
          this.store.pipe(select(getGenderProfile))
        ),
        map(([action, gender]: [{goalTraining: "massa muscolare" | "perdere peso" | "tonificarsi",type: string}, 'uomo' | 'donna']) => 
          this.localStorageService.saveUser({ gender: gender, goalTraining: action.goalTraining })
        )
      ),
    { dispatch: false }
  );

  // saveProfileGender$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(ProfileActions.saveProfileGender),
  //       // withLatestFrom(
  //       //   this.store.pipe(select(getGoalTrainingProfile))
  //       // )
  //       switchMapTo(this.store.pipe(select(getProfile))
  //       .pipe(
  //           map((user: User) => {
  //             console.log('profilo user',user);
  //               if(user.gender === 'uomo') {
  //                   if(user.goalTraining === 'massa muscolare' || user.goalTraining === 'perdere peso') {
  //                       this.localStorageService.saveUser(user)
  //                       // this.store.dispatch(CardsTrainingActions.checkCacheCardsTraining());
  //                   } else {
  //                       this.store.dispatch(ProfileActions.saveProfileGoalTraining({ goalTraining: 'massa muscolare' }))
  //                       // this.store.dispatch(CardsTrainingActions.checkCacheCardsTraining());
  //                   }
  //               } else {
  //                   if(user.goalTraining === 'tonificarsi' || user.goalTraining === 'perdere peso') {
  //                       this.localStorageService.saveUser(user)
  //                       // this.store.dispatch(CardsTrainingActions.checkCacheCardsTraining());
  //                   } else {
  //                       this.store.dispatch(ProfileActions.saveProfileGoalTraining({ goalTraining: 'perdere peso' }))
  //                       // this.store.dispatch(CardsTrainingActions.checkCacheCardsTraining());
  //                   }
  //               }
  //           })
  //       )),
  //     ),
  //   { dispatch: false }
  // );

  saveProfileGender$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProfileActions.saveProfileGender),
        withLatestFrom(
          this.store.pipe(select(getGoalTrainingProfile))
        ),
        map(([action, goalTraining]: [{gender: 'uomo' | 'donna', type: string}, "massa muscolare" | "perdere peso" | "tonificarsi"]) => {
            if(action.gender === 'uomo') {
                if(goalTraining === 'massa muscolare' || goalTraining === 'perdere peso') {
                    this.localStorageService.saveUser({gender: action.gender, goalTraining: goalTraining})
                    //this.store.dispatch(CardsTrainingActions.checkCacheCardsTraining());
                } else {
                    this.store.dispatch(ProfileActions.saveProfileGoalTraining({ goalTraining: 'massa muscolare' }))
                    //this.store.dispatch(CardsTrainingActions.checkCacheCardsTraining());
                }
            } else {
                if(goalTraining === 'tonificarsi' || goalTraining === 'perdere peso') {
                    this.localStorageService.saveUser({gender: action.gender, goalTraining: goalTraining})
                    //this.store.dispatch(CardsTrainingActions.checkCacheCardsTraining());
                } else {
                    this.store.dispatch(ProfileActions.saveProfileGoalTraining({ goalTraining: 'perdere peso' }))
                    //this.store.dispatch(CardsTrainingActions.checkCacheCardsTraining());
                }
            }
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private localStorageService: LocalStorageService
  ) {}
}
