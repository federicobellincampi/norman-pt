import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../core/core.module';
import { getCardsTrainer } from './store/selectors/cards-training.selectors';
import { MuscleGroupModel } from '../../../../models/muscle-group';
import { Observable } from 'rxjs';
import * as CardsTrainingActions from './store/actions/cards-training.actions';
import * as RooterActions from '../../../../core/router/store/router.actions';
  
@Component({
  selector: 'nf-trainers',
  templateUrl: 'trainers.component.html',
  styleUrls: ['trainers.component.scss'],
})
export class TrainersComponent {

  public getCardsTrainer$: Observable<MuscleGroupModel[]> = this.store.pipe(select(getCardsTrainer))
  items: Array<string>;
  
  constructor(private store: Store<AppState>) {
    this.store.dispatch(CardsTrainingActions.loadCardsTraining());
  }

  test() {
    this.getCardsTrainer$.subscribe(val => console.log(val));
  }

  public navToCardTrainer(card: string): void {
    this.store.dispatch(RooterActions.go({ path: ['tabs/home/card-trainer']}))
  }

}
