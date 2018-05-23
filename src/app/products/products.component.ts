import { Component, OnInit, Input, NgModule } from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from '../products';
import { ActivatedRoute } from '@angular/router';
// import { SubCategoryService } from '../sub-category.service';
// import { SubCategory } from '../sub-category';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass'],
  providers: [ProductsService]
})

export class ProductsComponent implements OnInit {

  @Input() name: string;

  items: Products[] = [];

  constructor(private dataService: ProductsService, activeRoute: ActivatedRoute) {
    activeRoute.params.subscribe(params => {
        this.name = params["category"] || null;
    })
}

getData(): Products[] {
  return this.dataService.getData()
    .filter(p => this.name == null || p.name == this.name);
    
}

ngOnInit() {
  this.items = this.dataService.getData();
}


}



