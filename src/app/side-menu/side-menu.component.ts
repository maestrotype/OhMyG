import { Component, Input } from '@angular/core';

// import { CategoryService } from '../category.service';
// import {Category} from '../category';

import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.sass'],
  moduleId: module.id
  // providers: [ProductRepository]
  // providers: [CategoryService]
})
export class SideMenuComponent {

  // categories: string[] = [];
  // categories: Category[] = [];
  // constructor(private dataService: CategoryService) { 
   
  // }

  constructor(private repository: ProductRepository,
    private router: Router) { }

  // addItem(category: string){      
  //   this.dataService.addData(category);
  // }

  get categories(): string[] {
    return this.repository.getCategories();
    }

  // ngOnInit() {
  //   // this.categories = this.dataService.getData();
  //   // this.categories = this.repository.getCategories();
  // }

}
