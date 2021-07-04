import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/core/core.module';
import { getGenderProfile, getGoalTrainingProfile, getProfile } from '../../../../core/profile/store/profile.selectors';
import { Observable } from 'rxjs';
import * as ProfileActions from '../../../../core/profile/store/profile.actions';
import * as CardsTrainingActions from '../workouts/store/actions/cards-training.actions';
import * as RouterActions from '../../../../core/router/store/router.actions';

@Component({
  selector: 'nf-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {

  public getProfile$: Observable<{
    gender: 'uomo' | 'donna';
    goalTraining: 'massa muscolare' | 'perdere peso' | 'tonificarsi';
  }> = this.store.pipe(select(getProfile));

  public getGenderProfile$: Observable<
  'uomo' | 'donna'
  > = this.store.pipe(select(getGenderProfile));

  public getGoalTrainingProfile$: Observable<
    'massa muscolare' | 'perdere peso' | 'tonificarsi'
    > = this.store.pipe(select(getGoalTrainingProfile));

  constructor(private store: Store<AppState>) { }

  public changeGender(gender: 'uomo' | 'donna'): void {
    this.store.dispatch(ProfileActions.saveProfileGender({ gender }))
    this.store.dispatch(CardsTrainingActions.loadCardsTraining());
    this.store.dispatch(RouterActions.go({ path: ['tabs/workouts'] }))
  }

  public changeGoalTraining(goalTraining: 'massa muscolare' | 'perdere peso' | 'tonificarsi'): void {
    this.store.dispatch(ProfileActions.saveProfileGoalTraining({ goalTraining }))
    this.store.dispatch(CardsTrainingActions.loadCardsTraining());
    this.store.dispatch(RouterActions.go({ path: ['tabs/workouts'] }))
  }

}
