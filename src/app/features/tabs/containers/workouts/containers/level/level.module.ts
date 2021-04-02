import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelComponent } from './level.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../../../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { LevelNumberComponent } from './components/level-number/level-number.component';


@NgModule({
  declarations: [LevelComponent, LevelNumberComponent],
  imports: [
    CommonModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: LevelComponent,
      }
    ])
  ]
})
export class LevelModule { }
