import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../category.service';
import {Category} from '../category';
// import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.sass'],
  providers: [CategoryService]
})
export class SideMenuComponent implements OnInit {

  categories: Category[] = [];
  constructor(private dataService: CategoryService) { 
   
  }

  addItem(category: string){      
    this.dataService.addData(category);
  }

  ngOnInit() {
    this.categories = this.dataService.getData();
  }

}
