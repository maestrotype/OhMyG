import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
// import { SubCategoryService } from '../sub-category.service';
// import { SubCategory } from '../sub-category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  @Input() name: string;

  items: Product[] = [];

  constructor(private dataService: ProductService, activeRoute: ActivatedRoute) {
    activeRoute.params.subscribe(params => {
        this.name = params["product"] || null;
    })
}

getData(): Product[] {
  return this.dataService.getData()
    .filter(p => this.name == null || p.name == this.name);
    
}

ngOnInit() {
  this.items = this.dataService.getData();
}

}


