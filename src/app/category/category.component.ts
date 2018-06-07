import { Component, Inject } from '@angular/core';
// import { CategoryService } from '../category.service';
// import { Category } from '../category';
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  moduleId: module.id,
  styleUrls: ['./category.component.sass'],
  providers: [ProductRepository]
  // providers: [CategoryService]
})
export class CategoryComponent {
  category: string = null;

  // items: Category[] = [];

  // constructor(private dataService: CategoryService, activeRoute: ActivatedRoute) {
    constructor(private repository: ProductRepository, activeRoute: ActivatedRoute) {  
    activeRoute.params.subscribe(params => {
        this.category = params["category"] || null;
    })
}
  
  // addItem(name: string){      
  //   this.dataService.addData(name);
  // }

  // ngOnInit() {
  //   this.items = this.dataService.getData();
  // }

    // getCategory(key: number): Category {
    //     return this.model.getProduct(key);
    // }

    get products(): Product[] {
      return this.repository.getProducts();
      }
      // get categories(): Product[] {
      // // return this.repository.getCategories();
      // }
     

    // getData(): Category[] {
    //     return this.dataService.getData()
    //       .filter(p => this.category == null || p.category == this.category);
          
    // }

    // get categories(): string[] {
    //   return this.dataService.getData()
    //     .map(p => p.category)
    //     .filter((category, index, array) => array.indexOf(category) == index);
    // }

}