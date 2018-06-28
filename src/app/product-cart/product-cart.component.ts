import { Component, Input } from '@angular/core';
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.sass']
})


export class ProductCartComponent  {

  id: number = null;
  name: string = '';

  constructor(
    private repository: ProductRepository,
    activeRoute: ActivatedRoute
  ) {
    activeRoute.params.subscribe(params => {
      this.id = params["id"] || null;
      console.log(activeRoute.params);
      console.log(this.id);
    });
  }

  get products(): Product[] {
    return this.repository
      .getProducts()
      .filter(p => this.id == null || p.id == this.id);
  }
  get categories(): string[] {
    return this.repository.getCategories();
  }

}
