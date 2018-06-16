import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { ActivatedRoute } from '@angular/router';
// import { SubCategoryService } from '../sub-category.service';
// import { SubCategory } from '../sub-category';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})

export class ProductsComponent {

  nameCategory: string = null;

  constructor(
    private repository: ProductRepository,
    activeRoute: ActivatedRoute
  ) {
    activeRoute.params.subscribe(params => {
      this.nameCategory = params["nameCategory"] || null;
      console.log(activeRoute.params);
    });
  }

  get products(): Product[] {
    return this.repository
      .getProducts()
      .filter(p => this.nameCategory == null || p.category == this.nameCategory);
  }
  get categories(): string[] {
    return this.repository.getCategories();
  }


}



