import { RatingModule } from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewproductComponent } from './newproduct.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewproductRoutingModule } from './newproduct-routing.module';


@NgModule({
  declarations: [
    NewproductComponent
  ],
  imports: [
    CommonModule,
    NewproductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RatingModule
  ]
})
export class NewproductModule { }
