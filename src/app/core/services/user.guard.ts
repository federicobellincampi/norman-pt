import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LocalStorageService } from './local-storage.service';
import * as RouterActions from '../router/store/router.actions';
import * as ProfileActions from '../profile/store/profile.actions';

import { Store } from '@ngrx/store';
import { AppState } from '../core.module';

@Injectable()
export class UserGuard implements CanActivate {

    constructor(
        private localStorageService: LocalStorageService,
        private store: Store<AppState>
        ) { }

    canActivate(): boolean {
        if(this.localStorageService.getUser()) {
            this.store.dispatch(ProfileActions.loadProfile({ user: JSON.parse(this.localStorageService.getUser())}))
        } else {
            this.store.dispatch(RouterActions.go({ path: ['init-flow'] }));
        }
        return !!this.localStorageService.getUser()
            
    }

}
