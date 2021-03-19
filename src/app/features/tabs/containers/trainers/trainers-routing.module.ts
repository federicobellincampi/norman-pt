import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainersComponent } from './trainers.component';

const routes: Routes = [
  {
    path: '',
    component: TrainersComponent, 
  },
  {
    path: 'card-trainer',
    loadChildren: () => import('./containers/card-trainer/card-trainer.module').then(m => m.CardTrainerModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainersRoutingModule {}
