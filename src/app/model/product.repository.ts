import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class ProductRepository {
    private products: Product[] = [];
    private categories: string[] = [];
    // private nameCategories: Product[] = [];
    

    constructor(private dataSource: StaticDataSource) {
        dataSource.getProducts().subscribe(data => {
            this.products = data;
            // this.nameCategories = data;
            // this.nameCategories = Array.call(data).map(p => p.nameCategory)
            //     .filter((c, index, array) => array.indexOf(c) == index).sort();
            //     console.log(this.nameCategories);
            this.categories = data.map(p => p.category)
                .filter((c, index, array) => array.indexOf(c) == index).sort();
        });
    }

    length = this.products.length;

    
    addData(id:number, name: string,category: string, nameCategory: string, imageUrl: string,description: string, price: number){
         
        this.products.push(new Product(id,name,category, nameCategory, imageUrl,description,price));
    }

    getProducts(category: string = null): Product[] {
        return this.products;
            // .filter(p => category == null || category == p.category);
    }

    getProduct(id: number): Product {
        return this.products.find(p => p.id == id);
    }
    topProduct(): Product[] {
         
        return this.products.filter(p => p.nameCategory == 'top');
    }
    getCategories(): string[] {
        return this.categories;
    }
}
