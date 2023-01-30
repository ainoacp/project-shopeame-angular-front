import { EditproductModule } from './editproduct.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditproductComponent } from './editproduct.component';

const routes: Routes = [
  {path: ':id', component: EditproductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditproductRoutingModule { }