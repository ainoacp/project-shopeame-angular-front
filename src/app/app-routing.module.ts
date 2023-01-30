import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  {path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule)},
  {path: 'newProduct', loadChildren: () => import('./pages/newproduct/newproduct.module').then(m => m.NewproductModule)}, 
  {path: 'product', loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule)},
  {path: 'editProduct', loadChildren: () => import('./pages/editproduct/editproduct.module').then(m => m.EditproductModule)}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
