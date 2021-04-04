import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuscleGroupGuard } from './containers/workouts/services/muscle-group.guard';
import { TabsComponent } from './tabs.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: 'workouts',
        loadChildren: () => import('./containers/workouts/workouts.module').then(m => m.TrainersModule),

      },
      {
        path: 'profile',
        loadChildren: () => import('./containers/profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: '',
        redirectTo: '/tabs/workouts',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/workouts',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
