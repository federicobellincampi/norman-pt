import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { AppState } from '../../../../../core/core.module';
import { getLevelSelected } from '../store/selectors/muscle-group.selectors';
import { Observable } from 'rxjs';
import * as RouterActions from '../../../../../core/router/store/router.actions'

@Injectable()
export class LevelGuard implements CanActivate {
    constructor(private store: Store<AppState>) { }

    canActivate(): Observable<boolean> {
        return this.store.pipe(select(getLevelSelected))
            .pipe(
                map((muscleGroup: string) => !!muscleGroup),
                tap((muscleGroup: boolean) => {
                    if(!muscleGroup) {
                        this.store.dispatch(RouterActions.go({ path: ['tabs'] }));
                    }
                })
            );
        }
}