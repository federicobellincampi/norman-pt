import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../core/core.module';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { getGenderState } from '../../store/selectors/gender.selectors';
import * as RouterActions from '../../../../core/router/store/router.actions';

@Injectable()
export class goToStep2Guard implements CanActivate {
    constructor(private store: Store<AppState>) { }

    canActivate(): Observable<boolean> {
        return this.store.pipe(
            select(getGenderState),
            map(gender => !!gender),
            tap(val => {
                if(!val) {
                    this.store.dispatch(RouterActions.go({ path: ['init-flow']}))
                }
            })
        )
    }   
}