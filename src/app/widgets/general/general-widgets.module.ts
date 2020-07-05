import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStatusComponent } from './user-status/user-status.component';



@NgModule({
  declarations: [UserStatusComponent],
  imports: [
    CommonModule
  ],
  exports: [UserStatusComponent]
})
export class GeneralWidgetsModule { }

