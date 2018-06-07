import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";


@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "Фаллоимитатор", "Фаллоимитаторы","../../assets/images/products/product_3.jpg","", 255),
        new Product(2, "Вибратор", "Вибраторы","../../assets/images/products/product_1.jpg","", 255),
        new Product(3, "Вибратор 1", "Анальные игрушки","../../assets/images/products/product_2.jpg","", 255),
        new Product(4, "Вибратор 2", "Женское здоровье","../../assets/images/products/product_4.jpg","", 255),
        new Product(5, "Вибратор 3", "Игрушки для мужчин","../../assets/images/products/product_5.jpg","", 255),
        new Product(6, "Вибратор 4", "Аптечка и косметика","../../assets/images/products/product_6.jpg","", 255),
        new Product(7, "Фаллоимитатор 5", "БДСМ","../../assets/images/products/product_7.jpg","", 255),
        new Product(8, "Вибратор 6", "Эротическая одежда","../../assets/images/products/product_8.jpg","", 255),
        new Product(9, "Вибратор 7", "Секс-бутик","../../assets/images/products/product_9.jpg","", 255),
        new Product(10, "Фаллоимитатор 8", "Акция","../../assets/images/products/product_3.jpg","", 255),
        new Product(11, "Вибратор 9", "Вибраторы","../../assets/images/products/product_3.jpg","", 255),
        new Product(12, "Фаллоимитатор", "БДСМ","../../assets/images/products/product_3.jpg","", 255),
        new Product(13, "БДСМ 3", "Акция","../../assets/images/products/product_3.jpg","", 255),
        new Product(14, "Вагина 5", "Фаллоимитаторы","../../assets/images/products/product_3.jpg","", 255),
        new Product(15, "БДСМ 4", "Вибраторы","../../assets/images/products/product_3.jpg","", 255)
    ];

    getProducts(): Observable<Product[]> {
        return Observable.from([this.products]);
    }
}
