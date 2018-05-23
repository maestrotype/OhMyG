import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SubCategoryService } from '../sub-category.service';
import { SubCategory } from '../sub-category';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.sass'],
  providers: [SubCategoryService]
})
export class SubCategoryComponent implements OnInit {

  @Input() category: string;

  id: string;

  items: SubCategory[] = [];
  // constructor(private dataService: SubCategoryService) { }

  // category: string = null;

  // items: Category[] = [];

  constructor(private dataService: SubCategoryService, activeRoute: ActivatedRoute) {
    this.id = activeRoute.snapshot.params['category'];
    activeRoute.params.subscribe(params => {
        this.category = params["category"] || null;
    })
}

getData(): SubCategory[] {
  return this.dataService.getData()
    .filter(p => this.category == null || p.category == this.category);
    
}

  // addItem(category: string,name: string, imageUrl: string){      
  //   this.dataService.addData(category, name, imageUrl);
  // }

  ngOnInit() {
    this.items = this.dataService.getData();
  }

}
