import { Component, OnInit, Input } from '@angular/core';
import { SubCategoryService } from '../sub-category.service';
import { SubCategory } from '../sub-category';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.sass'],
  providers: [SubCategoryService]
})


export class ProductCartComponent implements OnInit {

  @Input() name: string;

  items: SubCategory[] = [];

  constructor(private dataService: SubCategoryService) { }

  getData(): SubCategory[] {
    return this.dataService.getData()
      .filter(p => this.name == null || p.category == this.name);
      
  }

  ngOnInit() {
    this.items = this.dataService.getData();
  }

}
