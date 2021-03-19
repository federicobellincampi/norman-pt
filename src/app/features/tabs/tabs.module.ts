import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from './tabs.component';
import { TabsPageRoutingModule } from './tabs-routing.module';

@NgModule({
  declarations: [TabsComponent],
  imports: [
    IonicModule,
    CommonModule,
    TabsPageRoutingModule
  ]
})
export class TabsModule { }
