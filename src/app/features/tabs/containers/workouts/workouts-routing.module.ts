import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { workoutsComponent } from './workouts.component';

const routes: Routes = [
  {
    path: '',
    component: workoutsComponent, 
    children: [
      // {
      //   path: 'workouts/level',
      //   loadChildren: () => import('../workouts/containers/level/level.module').then(m => m.LevelModule),
      //   // children: [
      //   //   {
      //   //     path: 'card-trainer',
      //   //     loadChildren: () => import('../workouts/containers/card-trainer/card-trainer.module').then(m => m.CardTrainerModule)
      //   //   },
      //   // ]
      // },
    ]
  },

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class workoutsRoutingModule {}
