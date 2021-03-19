/* Angular */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

/* Modules */
import { SharedModule } from '../../../../shared/shared.module';
import { GenderSelectModule } from "../../components/gender-select/gender-select.module";
import { ButtonSelectModule } from "../../components/button-select/button-select.module";

/* Components */
import { Step1Component } from "./step1.component";
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [
    Step1Component,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    IonicModule,
    GenderSelectModule,
    ButtonSelectModule,
    RouterModule.forChild([
      {
        path: '',
        component: Step1Component,
      },
    ]),
  ],
  providers: []
})
export class Step1Module {}
