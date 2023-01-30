import { RatingModule } from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditproductComponent } from './editproduct.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditproductRoutingModule } from './editproduct-routing.module';


@NgModule({
  declarations: [
    EditproductComponent
  ],
  imports: [
    CommonModule,
    EditproductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RatingModule
  ]
})
export class EditproductModule { }
