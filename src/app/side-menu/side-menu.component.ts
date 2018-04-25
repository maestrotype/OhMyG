import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import {Category} from '../category';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.sass'],
  providers: [CategoryService]
})
export class SideMenuComponent implements OnInit {

  items: Category[] = [];
  constructor(private dataService: CategoryService) { }

  addItem(name: string){      
    this.dataService.addData(name);
  }

  ngOnInit() {
    this.items = this.dataService.getData();
  }

}
