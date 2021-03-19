import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Location } from '@angular/common';
import * as RouterActions from './router.actions';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Injectable()
export class RouterEffects {

    goEffect$ = createEffect(() => this.actions$
        .pipe(
            ofType(RouterActions.go),
            tap(action => {
                this.router.navigate(action.path, action.extras);
            })
        ), {dispatch: false}
    );

    backEffect$ = createEffect(() => this.actions$
        .pipe(
            ofType(RouterActions.back),
            tap(action => this.navCtrl.back() )
        ), {dispatch: false}
    );

    forwardEffect$ = createEffect(() => this.actions$
        .pipe(
            ofType(RouterActions.forward),
            tap(action =>  this.location.forward() )
        ), {dispatch: false}
    );

    constructor(
        private actions$: Actions,
        private router: Router,
        private location: Location,
        private navCtrl: NavController
    ) {}
}
