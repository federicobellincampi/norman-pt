import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { workoutsComponent } from './workouts.component';

const routes: Routes = [
  {
    path: '',
    component: workoutsComponent, 
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class workoutsRoutingModule {}
