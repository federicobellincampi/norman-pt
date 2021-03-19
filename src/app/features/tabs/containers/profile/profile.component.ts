import { ChangeDetectionStrategy, Component } from '@angular/core';
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
    goalTraining: 'massa muscolare' | 'perdita di peso' | 'tonificazione';
  }> = this.store.pipe(select(getProfile));

  public getGender$: Observable<
  'uomo' | 'donna'
  > = this.store.pipe(select(getGenderProfile));

  public getGoalTraining$: Observable<
    'massa muscolare' | 'perdita di peso' | 'tonificazione'
    > = this.store.pipe(select(getGoalTrainingProfile));

  public getButtonDisable$: Observable<string> = this.store.pipe(select(getButtonDisable))

  constructor(private store: Store<AppState>) { }

  public ionViewWillEnter(): void { 
    this.store.dispatch(SaveChangesActions.buttonDisable())
    
  }

  public changeGender(gender: 'uomo' | 'donna'): void {
    this.getGender$.subscribe((gender: 'uomo' | 'donna') => {
      console.log(gender);
    })
    // this.store.dispatch(SaveChangesActions.buttonActive())
    // this.store.dispatch(ProfileActions.saveProfileGender({ gender }))
  }

  public changeGoalTraining(goalTraining: 'massa muscolare' | 'perdita di peso' | 'tonificazione'): void {
    //console.log('goal training')
    //this.checkStatusButton();
    // this.store.dispatch(ProfileActions.saveProfileGoalTraining({ goalTraining }))
  }

  public saveChanges(): void {
    this.store.dispatch(ProfileActions.saveProfile())
    this.store.dispatch(SaveChangesActions.buttonDisable())
  }

  public checkStatusButton(): void {
    this.getButtonDisable$.subscribe((disable: string) => {
      disable === "true" ? this.store.dispatch(SaveChangesActions.buttonActive()) : null;
    })
   
  }
}
