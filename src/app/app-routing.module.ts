import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './core/services/user.guard';
import { LevelGuard } from './features/tabs/containers/workouts/services/level.guard';
import { MuscleGroupGuard } from './features/tabs/containers/workouts/services/muscle-group.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/tabs/tabs.module').then( m => m.TabsModule),
    canActivate: [UserGuard]
  },
  {
    path: 'init-flow',
    loadChildren: () => import('./features/initialize-app-flow/initialize-app-flow.module').then( m => m.InitializeAppFlowModule)
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'tabs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
