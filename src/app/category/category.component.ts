import { Component, Inject, Input } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  moduleId: module.id,
  styleUrls: ["./category.component.sass"],
  providers: [ProductRepository]
})
export class CategoryComponent {
  category: string = null;

  constructor(
    private repository: ProductRepository,
    activeRoute: ActivatedRoute
  ) {
    activeRoute.params.subscribe(params => {
      this.category = params["mode"] || null;
    });
  }
  
  get products(): Product[] {
    return this.repository
      .getProducts()
      .filter(p => this.category == null || p.category == this.category);
  }
  get categories(): string[] {
    return this.repository.getCategories();
  }
}
