import { Component, OnInit } from '@angular/core';
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.sass'],
  providers: [ProductRepository]
})
export class BreadcrumbsComponent implements OnInit {
  nameCategory: string = null;
  category: string = null;

  constructor(
    private repository: ProductRepository,
    activeRoute: ActivatedRoute
  ) {
    activeRoute.pathFromRoot.forEach(route =>
      route.params.subscribe(params => {
        if (params["mode"] != null) {
          this.category = params["mode"];
          // this.nameCategory = params["nameCategory"] || null;
          console.log(this.nameCategory);
        }
      })
    );
    activeRoute.params.subscribe(params => {
      this.nameCategory = params["nameCategory"] || null;
      console.log(this.nameCategory);
    });
  }

  ngOnInit() {
    // this.nameCategory = this.nameCategory;
  }

}
