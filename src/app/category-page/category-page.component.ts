import { Component, Inject } from '@angular/core';
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.sass']
})
export class CategoryPageComponent {

    category: string = null;

      constructor(private repository: ProductRepository, activeRoute: ActivatedRoute) {  
    //   activeRoute.params.subscribe(params => {
    //       this.category = params["mode"] || null;
    //     //   console.log(activeRoute.params["_value"]["mode"]);
    //       console.log(activeRoute.params);
    //       console.log(activeRoute.params["_value"]);
    //   })

      activeRoute.pathFromRoot.forEach(route => route.params.subscribe(params => { if (params["mode"] != null) {
        this.category = params["mode"];
        
    }
}))
  }
    
  
    //   get products(): Product[] {
    //     return this.repository.getProducts()
    //     .filter(p => this.category == null || p.category == this.category);
    //     }
      

}
