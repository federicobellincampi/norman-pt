import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitializeAppFlowComponent } from './initialize-app-flow.component';
import { goToStep2Guard } from './services/guards/goToStep2.guard';

const routes: Routes = [
  {
    path: '',
    component: InitializeAppFlowComponent,
  },
  {
    path: 'step1',
    loadChildren: () => import('./containers/step1/step1.module').then( m => m.Step1Module)  
  },
  {
    path: 'step2',
    loadChildren: () => import('./containers/step2/step2.module').then( m => m.Step2Module),
    canActivate: [goToStep2Guard]
  },
  {
    path: '',
    redirectTo: 'initAppFlow',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitializeAppFlowRoutingModule { }
