import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { AppState } from "../../../../core/core.module";
import { map, mergeMapTo, take, tap } from "rxjs/operators";
import { getFooterDisable } from "../selectors/ui.selectors";
import { GenderState } from "../reducers/gender.reducer";
import { getGenderState } from "../selectors/gender.selectors";
import * as UiActions from "../actions/ui.actions";
import * as GenderSelected from "../actions/gender.actions";
import * as ProfileActions from "../../../../core/profile/store/profile.actions";


@Injectable()
export class GenderEffects {
  checkGenderSelected$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(GenderSelected.checkGenderSelected),
        mergeMapTo(this.store.pipe(select(getGenderState))
          .pipe(
            take(1),
            map((val: GenderState) => {
                if(val.manSelected || val.womanSelected) {
                    this.store.dispatch(UiActions.footerActive());
                }
            })
          )
        )
      ),
    { dispatch: false }
  );

  manSelected$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(GenderSelected.manSelected),
        tap(() => {
          this.store.dispatch(ProfileActions.saveProfileGender({ gender: 'uomo' }))
        }),
        mergeMapTo(this.store.pipe(select(getFooterDisable)).pipe(
          take(1),
          map((footerDisable: boolean) => {
            if(footerDisable) {
              this.store.dispatch(UiActions.footerActive())
            }
          })
        ))
      ),
    { dispatch: false }
  );

  womanSelected$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(GenderSelected.womanSelected),
        tap(() => {
          this.store.dispatch(ProfileActions.saveProfileGender({ gender: 'donna' }))
        }),
        mergeMapTo(this.store.pipe(select(getFooterDisable)).pipe(
          take(1),
          map((footerDisable: boolean) => {
            if(footerDisable) {
              this.store.dispatch(UiActions.footerActive())
            }
          })
        ))
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private store: Store<AppState>) {}
}
