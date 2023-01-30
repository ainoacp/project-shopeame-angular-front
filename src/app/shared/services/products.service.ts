import { Iproduct } from './../models/product.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  db_url:string = 'http://localhost:3000/products';
  product!: Iproduct;
  id!: number;
  
  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get(this.db_url)
  }

  getProduct(id:number){
    return this.http.get(`${this.db_url}/${id}`);
  }

  postProduct(product:Iproduct){
    return this.http.post(this.db_url, product);
  }

  putProduct(product:Iproduct, id:number){
    return this.http.put(`${this.db_url}/${id}`, product);
  }
  
  setProduct(product:any){
    this.product = product;
    this.id = product.id;
  }
  
}