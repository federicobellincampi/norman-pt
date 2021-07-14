import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from './tabs.component';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { enterAnimation } from '../../animations/nav-animation';

@NgModule({
  declarations: [TabsComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot({
      swipeBackEnabled: true
    }), 
    TabsPageRoutingModule,
  ],
})
export class TabsModule { }
