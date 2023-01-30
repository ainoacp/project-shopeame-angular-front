import { Iproduct } from './../../shared/models/product.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent {
  productForm!: FormGroup;
  id:number = this.productService.id;
  updatedProduct:Iproduct = this.productService.product;
  
  constructor(private formBuilder: FormBuilder, private productService: ProductsService, private router: Router) {}
  
  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: [this.updatedProduct.name, [Validators.required]],
      image: [this.updatedProduct.image, [Validators.required]],
      description: [this.updatedProduct.description, [Validators.required]],
      price: [this.updatedProduct.price, [Validators.required]],
      stars: [this.updatedProduct.stars, [Validators.required]]
    });
    this.productForm!.valueChanges.subscribe(changes => {
      this.updatedProduct = changes;
    })
  }

  onSubmit(){
    console.log(this.updatedProduct);
    this.productService.putProduct(this.updatedProduct, this.id).subscribe((data) => {
      console.log(data);
    });
    this.productForm.reset();
    this.router.navigate([`/product/${this.id}`]);
  }
}
