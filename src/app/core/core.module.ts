import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { routerReducer, RouterReducerState, RouterState, StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterEffects } from './router/store/router.effects';
import { EffectsModule } from '@ngrx/effects';
import { UserGuard } from './services/user.guard';
import { LocalStorageService } from './services/local-storage.service';
import { ProfileEffects } from './profile/store/profile.effects';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MuscleGroupGuard } from "../features/tabs/containers/workouts/services/muscle-group.guard";
import { LevelGuard } from "../features/tabs/containers/workouts/services/level.guard";
import { ProfileState, reducer as profileReducer } from './profile/store/profile.reducer';
export interface AppState {
  // auth: AuthState;
  profile: ProfileState;
  router: RouterReducerState;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(
      {
        profile: profileReducer,
        router: routerReducer,
      },
      {
        runtimeChecks: {
          strictActionImmutability: true,
          strictActionSerializability: true,
          strictStateImmutability: true,
          strictStateSerializability: true,
        },
      }
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal,
    }),
    EffectsModule.forRoot([
      RouterEffects, 
      ProfileEffects, 
    ]),
  ],
  providers:[
    UserGuard, 
    MuscleGroupGuard,
    LevelGuard, 
    LocalStorageService
  ]
})
export class CoreModule {}
