import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './core/services/user.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/tabs/tabs.module').then( m => m.TabsModule),
    canActivate: [UserGuard]
  },
  {
    path: 'init-flow',
    loadChildren: () => import('./features/initialize-app-flow/initialize-app-flow.module').then( m => m.InitializeAppFlowModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
