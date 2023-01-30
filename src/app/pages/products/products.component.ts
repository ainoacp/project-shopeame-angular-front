import { Iproduct } from './../../shared/models/product.interface';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  productsList: Iproduct[] = [];
  paintedProducts: Iproduct[] = [];

  constructor(private productsService: ProductsService) {}

  
  ngOnInit() {
    this.productsService.getProducts().subscribe((data:any) => {
      this.productsList = [...data];
      this.paintedProducts = [...data];
      console.log(data);
    })
  }

  filter(name:string){
    let filteredProducts = this.productsList.filter((product) => product.name.toLowerCase().includes(name.toLowerCase()))
    this.paintedProducts = [...filteredProducts];
  }
}
