import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/core/core.module';
import { getGenderProfile, getGoalTrainingProfile, getProfile } from '../../../../core/profile/store/profile.selectors';
import { Observable } from 'rxjs';
import { getButtonDisable } from './store/selectors/save-changes.selectors';
import * as ProfileActions from '../../../../core/profile/store/profile.actions';
import * as SaveChangesActions from './store/actions/save-changes.actions';
import { map, take, tap } from 'rxjs/operators';

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

  public getButtonDisable$: Observable<string> = this.store.pipe(select(getButtonDisable))
  options = {
    cssClass: 'my-custom-interface'
  };
  constructor(private store: Store<AppState>) { }

  public ionViewWillEnter(): void { 
    
  }

  public changeGender(gender: 'uomo' | 'donna'): void {
    this.store.dispatch(ProfileActions.saveProfileGender({ gender }))
  }

  public changeGoalTraining(goalTraining: 'massa muscolare' | 'perdere peso' | 'tonificarsi'): void {
    this.store.dispatch(ProfileActions.saveProfileGoalTraining({ goalTraining }))
  }

}
