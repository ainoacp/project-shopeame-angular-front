import { Iproduct } from './../../shared/models/product.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.scss']
})
export class NewproductComponent implements OnInit{
  productForm!: FormGroup;
  newProduct:Iproduct = {
    name: '', 
    image: '', 
    description: '',
    price: 0, 
    stars: 0, 
  };
  
  constructor(private formBuilder: FormBuilder, private productService: ProductsService) {}
  
  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      image: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      stars: ['', [Validators.required]]
    });
    this.productForm.valueChanges.subscribe(changes => {
      this.newProduct = changes;
    })
  }

  onSubmit(){
    console.log(this.newProduct);
    this.productService.postProduct(this.newProduct).subscribe((data) => {
      console.log(data);
    });
    this.productForm.reset();
  }
}
