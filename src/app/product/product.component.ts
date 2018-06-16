import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {

  nameCategory: string = null;

  constructor(
    private repository: ProductRepository,
    activeRoute: ActivatedRoute
  ) {
    activeRoute.params.subscribe(params => {
      this.nameCategory = params["nameCategory"] || null;
      console.log(activeRoute.params["_value"]["mode"]);
    });
  }

  get products(): Product[] {
    return this.repository
      .getProducts()
      .filter(p => this.nameCategory == null || p.nameCategory == this.nameCategory);
  }
  get categories(): string[] {
    return this.repository.getCategories();
  }


}


