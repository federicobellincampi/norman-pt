import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../../core/core.module';

@Component({
  selector: 'nf-card-trainer',
  templateUrl: './card-trainer.component.html',
  styleUrls: ['./card-trainer.component.scss'],
})
export class CardTrainerComponent {

  constructor(private store: Store<AppState>) { 
    //this.store.pipe(select())
  }


}
