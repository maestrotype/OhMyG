import { Component, Inject } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../category';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass'],
  providers: [CategoryService]
})
export class CategoryComponent {
  category: string = null;

  // items: Category[] = [];

  constructor(private dataService: CategoryService, activeRoute: ActivatedRoute) {
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

    getData(): Category[] {
        return this.dataService.getData()
          .filter(p => this.category == null || p.category == this.category);
          
    }

    get categories(): string[] {
      return this.dataService.getData()
        .map(p => p.category)
        .filter((category, index, array) => array.indexOf(category) == index);
    }

}