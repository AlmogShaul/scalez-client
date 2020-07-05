import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavvyComponent } from './savvy/savvy.component';
import {GeneralWidgetsModule} from '../../widgets/general/general-widgets.module';
import {ButtonsModule} from '../../widgets/buttons/buttons.module';



@NgModule({
  declarations: [SavvyComponent],
  imports: [
    CommonModule,
    GeneralWidgetsModule,
    ButtonsModule
  ]
})
export class SavvyModule { }
