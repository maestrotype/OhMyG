import { Component, Inject, OnInit } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-category-page",
  templateUrl: "./category-page.component.html",
  styleUrls: ["./category-page.component.sass"]
})
export class CategoryPageComponent implements OnInit {
  nameCategory:string;
  public productsPerPage = 8;
  public selectedPage = 1;
  category: string = null;

  constructor(
    private repository: ProductRepository,
    activeRoute: ActivatedRoute
  ) {
    activeRoute.pathFromRoot.forEach(route =>
      route.params.subscribe(params => {
        if (params["mode"] != null) {
          this.category = params["mode"];
        }
      })
    );
    activeRoute.params.subscribe(params => {
      this.nameCategory = params["nameCategory"] || null;
      
    });
  }

  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository
      .getProducts()
      .filter(
        p => this.nameCategory == null || p.nameCategory == this.nameCategory
      )
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }
  get categories(): string[] {
    return this.repository.getCategories();
  }

  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }
  get pageNumbers(): number[] {
    return Array(Math.ceil(this.repository.getProducts().filter(
      p => this.nameCategory == null || p.nameCategory == this.nameCategory
    ).length / this.productsPerPage))
    .fill(0).map((x, i) => i + 1);
  }   
  
  ngOnInit() {
  this.nameCategory;
    console.log(this.nameCategory);
  }
  }

