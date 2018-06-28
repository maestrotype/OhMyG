import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { ActivatedRoute } from '@angular/router';

@Component({
  // selector: 'paginator-configurable-example',
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.sass']
})
export class PaginatorComponent {

  nameCategory: string = null;
  public productsPerPage = 8;
  public selectedPage = 1;
  @Output() newPageEvent = new EventEmitter<number>();
  @Output() sizePageEvent = new EventEmitter<number>();
  

  constructor(
    private repository: ProductRepository,
    activeRoute: ActivatedRoute
  ) {
    activeRoute.params.subscribe(params => {
      this.nameCategory = params["nameCategory"] || null;
      console.log(this.nameCategory);
    });
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
    this.newPageEvent.emit(this.selectedPage);   
  }

  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
    this.sizePageEvent.emit(this.productsPerPage);
    console.log(this.productsPerPage);
    // this.changePage(1);
}
get pageNumbers(): number[] {
  return Array(Math.ceil(this.repository.getProducts()
  .filter(p => this.nameCategory == null || p.nameCategory == this.nameCategory)
  .length / this.productsPerPage))
  .fill(0).map((x, i) => i + 1);
}
  

}
