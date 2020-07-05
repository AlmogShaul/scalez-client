import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainButtonComponent } from './main-button/main-button.component';
import { RatingButtonComponent } from './extra-rating-buttons/rating-button/rating-button.component';
import { RatingButtonABWrapperComponent } from './extra-rating-buttons/rating-button-ab-wrapper/rating-button-ab-wrapper.component';
import { Rating2ButtonComponent } from './extra-rating-buttons/rating2-button/rating2-button.component';



@NgModule({
  declarations: [MainButtonComponent, RatingButtonComponent, RatingButtonABWrapperComponent, Rating2ButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [MainButtonComponent, RatingButtonComponent, RatingButtonABWrapperComponent]
})
export class ButtonsModule { }
