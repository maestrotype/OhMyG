import { Component, OnInit, Input,Output, NgModule } from '@angular/core';
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { ActivatedRoute } from "@angular/router";
import {myAnimation} from "../carousel.animations";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass'],
  providers: [ProductRepository],
  animations: [myAnimation]
})
export class ProductComponent {
  nameCategory: string = null;
  productsPerPage:number = 4;
  selectedPage: number = 1;

  constructor(
    private repository: ProductRepository,
    activeRoute: ActivatedRoute
  ) {
    activeRoute.params.subscribe(params => {
      this.nameCategory = params["nameCategory"] || null;
      console.log(params["nameCategory"]);
    });
  }

  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage
    return this.repository
      .getProducts()
      .filter(p => this.nameCategory == null || p.nameCategory == this.nameCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
      
  }

  changePage($event) {
    this.selectedPage = $event;
    console.log(this.selectedPage);
  }
  get categories(): string[] {
    return this.repository.getCategories();
  }

  changePageSize($event) {
    this.productsPerPage = $event;
    // this.changePage(1);
    console.log(this.productsPerPage);
}
get pageNumbers(): number[] {
  return Array(Math.ceil(this.repository.getProducts(this.nameCategory).length / this.productsPerPage))
  .fill(0).map((x, i) => i + 1);
}

ngOnInit() {
  
}

}


