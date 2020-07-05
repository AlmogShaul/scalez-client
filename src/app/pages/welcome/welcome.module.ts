import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import {ButtonsModule} from '../../widgets/buttons/buttons.module';



@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    ButtonsModule
  ]
})
export class WelcomeModule { }
