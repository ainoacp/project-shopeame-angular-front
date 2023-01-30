import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { ProductComponent } from './product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    RatingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
