import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../core/core.module';
import { getCardsTrainer } from './store/selectors/cards-training.selectors';
import { MuscleGroupModel } from '../../../../models/muscle-group';
import { Observable } from 'rxjs';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';
import * as CardsTrainingActions from './store/actions/cards-training.actions';
import * as MuscleGroupActions from './store/actions/muscle-group.actions';

@Component({
  selector: 'nf-trainers',
  templateUrl: 'workouts.component.html',
  styleUrls: ['workouts.component.scss'],
  animations: [
    trigger('opacityAnimation', [
      transition(':enter', [
        query(':enter', [
          style({ opacity: 0 }),
          stagger('200ms', [
            style({ opacity: 0, transform: 'translateX(-200px)' }),
		        animate('200ms ease-in', style({ opacity: 1, transform: 'translateY(0)' })),
          ])
        ])  
      ]),
      transition(':leave', [
        query(':enter', [
          style({ opacity: 0 }),
          stagger('200ms ease-in', [
            style({ opacity: 0, transform: 'translateX(-200px)' })
          ])
        ])  
      ])
    ]),
  ]
})

export class workoutsComponent {

  public getCardsTrainer$: Observable<MuscleGroupModel[]> = this.store.pipe(select(getCardsTrainer))
  
  constructor(private store: Store<AppState>) { }

  public ionViewWillEnter(): void {
    this.store.dispatch(CardsTrainingActions.loadCardsTraining());
  }

  public navToLevel(muscleGroupSelected: string, imgUrl: string): void {
    this.store.dispatch(MuscleGroupActions.muscleGroupSelected({ muscleGroupSelected, imgUrl }))
  }

}
