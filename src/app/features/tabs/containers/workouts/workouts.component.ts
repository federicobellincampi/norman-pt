import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../core/core.module';
import { getCardsTrainer } from './store/selectors/cards-training.selectors';
import { MuscleGroupModel } from '../../../../models/muscle-group';
import { Observable } from 'rxjs';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';
import * as CardsTrainingActions from './store/actions/cards-training.actions';
import * as MuscleGroupActions from './store/actions/muscle-group.actions';
// import { AdmobService } from '../../../../core/services/admob.service';

@Component({
  selector: 'nf-trainers',
  templateUrl: 'workouts.component.html',
  styleUrls: ['workouts.component.scss'],
})

export class WorkoutsComponent {

  public getCardsTrainer$: Observable<MuscleGroupModel[]> = this.store.pipe(select(getCardsTrainer))
  
  constructor(
    private store: Store<AppState>, 
    // private admobService: AdmobService,
    ) { 
    this.store.dispatch(CardsTrainingActions.checkCacheCardsTraining());
  }

  ngOnInit() {
    //LOAD THE BANNER AT PAGE INIT
    //this.admobService.ShowBanner();
    }

  public navToLevel(muscleGroupSelected: string, imgUrl: string): void {
    this.store.dispatch(MuscleGroupActions.muscleGroupSelected({ muscleGroupSelected, imgUrl }))
  }

    // //FUNCTION FOR INTERSTITIAL
    // Interstitial(){
    //   this.admobService.ShowInterstitial();
    // }
  
    // //FUNCTION FOR VIDEOREWARD
    // Reward(){
    //   this.admobService.ShowRewardVideo();
    // }

}
