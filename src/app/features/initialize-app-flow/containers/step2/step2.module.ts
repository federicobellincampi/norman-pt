/* Angular */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Modules */
import { SharedModule } from '../../../../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CardModule } from '../../components/card/card.module';
import { GenderSelectModule } from '../../components/gender-select/gender-select.module';

/* Components */
import { Step2Component } from './step2.component';

@NgModule({
  declarations: [
    Step2Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    IonicModule,
    CardModule,
    GenderSelectModule,
    RouterModule.forChild([
      {
        path: '',
        component: Step2Component,
      },
    ]),
  ]
})
export class Step2Module { }
