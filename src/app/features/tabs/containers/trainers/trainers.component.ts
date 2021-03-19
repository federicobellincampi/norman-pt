import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../core/core.module';
import * as CardsTrainingActions from './store/actions/cards-training.actions';
import * as RooterActions from '../../../../core/router/store/router.actions';
import { getCardsTrainer } from './store/selectors/cards-training.selectors';
import { CardTraining } from '../../../../models/card-training.model';
import { Observable } from 'rxjs';
  
@Component({
  selector: 'nf-trainers',
  templateUrl: 'trainers.component.html',
  styleUrls: ['trainers.component.scss'],
})
export class TrainersComponent {

  public getCardsTrainer$: Observable<CardTraining[]> = this.store.pipe(select(getCardsTrainer))
  
  constructor(private store: Store<AppState>) {
    
    // this.store.dispatch(CardsTrainingActions.loadCardsTraining());
    // this.store.pipe(select(getCardsTrainer)).subscribe(val => console.log(val ))
  }

  public navToCardTrainer(card: string): void {
    this.store.dispatch(RooterActions.go({ path: ['tabs/home/card-trainer']}))
  }

}
