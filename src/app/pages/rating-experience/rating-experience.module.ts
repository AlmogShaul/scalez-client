import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingExperienceComponent } from './rating-experience/rating-experience.component';
import {ButtonsModule} from '../../widgets/buttons/buttons.module';



@NgModule({
  declarations: [RatingExperienceComponent],
  imports: [
    CommonModule,
    ButtonsModule
  ]
})
export class RatingExperienceModule { }
