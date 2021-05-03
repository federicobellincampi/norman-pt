import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LevelGuard } from './containers/workouts/services/level.guard';
import { MuscleGroupGuard } from './containers/workouts/services/muscle-group.guard';
import { TabsComponent } from './tabs.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: 'workouts',
        children: [
          {
            path: "",
            loadChildren: () => import('./containers/workouts/workouts.module').then(m => m.TrainersModule),
          },
          {
            path: "level",
            loadChildren: () => import('./containers/workouts/containers/level/level.module').then(m => m.LevelModule),
            canActivate: [MuscleGroupGuard]
          },
          {
            path: 'card-trainer',
            loadChildren: () => import('./containers/workouts/containers/card-trainer/card-trainer.module').then(m => m.CardTrainerModule),
            canActivate: [LevelGuard]
          },

        ]
      },
      {
        path: 'profile',
        loadChildren: () => import('./containers/profile/profile.module').then(m => m.ProfileModule)
      },
      {
        path: 'info',
        loadChildren: () => import('./containers/info/info.module').then(m => m.InfoModule)
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
export class TabsPageRoutingModule { }
