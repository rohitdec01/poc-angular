import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
  
  ],
  // Note: We are exporting modules so that it can use in any other module after adding shared module in that particular module.
  exports: [ 
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
