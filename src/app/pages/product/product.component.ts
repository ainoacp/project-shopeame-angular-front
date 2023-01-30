import { Iproduct } from './../../shared/models/product.interface';
import { ProductsService } from './../../shared/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  
  id!: number;
  product!:Iproduct;

  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute){  }
  
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    })
    this.productsService.getProduct(this.id).subscribe((data:any) => {
      console.log(data);
      this.product = data;
      this.productsService.setProduct(data);
    })
  }
}
