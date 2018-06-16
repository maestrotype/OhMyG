import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";


@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "Фаллоимитатор", "Фаллоимитаторы","попы","../../assets/images/products/product_3.jpg","", 255),
        new Product(2, "Вибратор", "Вибраторы","грудь","../../assets/images/products/product_7.jpg","", 255),
        new Product(3, "Вибратор 1", "Анальные игрушки","ротики","../../assets/images/products/product_1.png","", 255),
        new Product(4, "Вибратор 2", "Женское здоровье","попы","../../assets/images/products/product_2.png","", 255),
        new Product(5, "Вибратор 3", "Игрушки для мужчин","ротики","../../assets/images/products/product_5.jpg","", 255),
        new Product(6, "Вибратор 4", "Аптечка и косметика","грудь","../../assets/images/products/product_6.jpg","", 255),
        new Product(7, "Фаллоимитатор 5", "БДСМ","попы","../../assets/images/products/product_7.jpg","", 255),
        new Product(8, "Вибратор 6", "Эротическая одежда","грудь","../../assets/images/products/product_2.png","", 255),
        new Product(9, "Вибратор 7", "Секс-бутик","грудь","../../assets/images/products/product_1.png","", 255),
        new Product(10, "Фаллоимитатор 8", "Акция","попы","../../assets/images/products/product_3.jpg","", 255),
        new Product(11, "Вибратор 9", "Вибраторы","ротики","../../assets/images/products/product_1.png","", 255),
        new Product(12, "Фаллоимитатор", "БДСМ","грудь","../../assets/images/products/product_3.jpg","", 255),
        new Product(13, "БДСМ 3", "Акция","ротики","../../assets/images/products/product_3.jpg","", 255),
        new Product(14, "Вагина 5", "Фаллоимитаторы","попы","../../assets/images/products/product_3.jpg","", 255),
        new Product(15, "БДСМ 4", "Вибраторы","ротики","../../assets/images/products/product_3.jpg","", 255),
        new Product(16, "Фаллоимитатор", "Фаллоимитаторы","грудь","../../assets/images/products/product_7.jpg","", 255),
        new Product(17, "Вибратор", "Вибраторы","попы","../../assets/images/products/product_3.jpg","", 255),
        new Product(18, "Вибратор 1", "Анальные игрушки","грудь","../../assets/images/products/product_2.png","", 255),
        new Product(19, "Вибратор 2", "Женское здоровье","ротики","../../assets/images/products/product_1.png","", 255),
        new Product(20, "Вибратор 3", "Игрушки для мужчин","попы","../../assets/images/products/product_5.jpg","", 255),
        new Product(21, "Вибратор 4", "Аптечка и косметика","грудь","../../assets/images/products/product_6.jpg","", 255),
        new Product(22, "Фаллоимитатор 5", "БДСМ","ротики","../../assets/images/products/product_7.jpg","", 255),
        new Product(23, "Вибратор 6", "Эротическая одежда","попы","../../assets/images/products/product_2.png","", 255),
        new Product(24, "Вибратор 7", "Секс-бутик","грудь","../../assets/images/products/product_2.png","", 255),
        new Product(25, "Фаллоимитатор 8", "Акция","ротики","../../assets/images/products/product_3.jpg","", 255),
        new Product(26, "Вибратор 9", "Вибраторы","попы","../../assets/images/products/product_1.png","", 255),
        new Product(27, "Фаллоимитатор", "БДСМ","ротики","../../assets/images/products/product_5.jpg","", 255),
        new Product(28, "БДСМ 3", "Акция","грудь","../../assets/images/products/product_7.jpg","", 255),
        new Product(29, "Вагина 5", "Фаллоимитаторы","попы","../../assets/images/products/product_3.jpg","", 255),
        new Product(30, "БДСМ 4", "Вибраторы","грудь","../../assets/images/products/product_3.jpg","", 255),
        new Product(31, "Фаллоимитатор", "Фаллоимитаторы","ротики","../../assets/images/products/product_3.jpg","", 255),
        new Product(32, "Вибратор", "Вибраторы","грудь","../../assets/images/products/product_7.jpg","", 255),
        new Product(33, "Вибратор 1", "Анальные игрушки","попы","../../assets/images/products/product_1.png","", 255),
        new Product(34, "Вибратор 2", "Женское здоровье","ротики","../../assets/images/products/product_2.png","", 255),
        new Product(35, "Вибратор 3", "Игрушки для мужчин","попы","../../assets/images/products/product_5.jpg","", 255),
        new Product(36, "Вибратор 4", "Аптечка и косметика","грудь","../../assets/images/products/product_6.jpg","", 255),
        new Product(37, "Фаллоимитатор 5", "БДСМ","попы","../../assets/images/products/product_3.jpg","", 255),
        new Product(38, "Вибратор 6", "Эротическая одежда","грудь","../../assets/images/products/product_1.png","", 255),
        new Product(39, "Вибратор 7", "Секс-бутик","грудь","../../assets/images/products/product_2.png","", 255),
        new Product(40, "Фаллоимитатор 8", "Акция","попы","../../assets/images/products/product_7.jpg","", 255),
        new Product(41, "Вибратор 9", "Вибраторы","ротики","../../assets/images/products/product_2.png","", 255),
        new Product(42, "Фаллоимитатор", "БДСМ","грудь","../../assets/images/products/product_5.jpg","", 255),
        new Product(43, "БДСМ 3", "Акция","ротики","../../assets/images/products/product_2.png","", 255),
        new Product(44, "Вагина 5", "Фаллоимитаторы","попы","../../assets/images/products/product_5.jpg","", 255),
        new Product(45, "БДСМ 4", "Вибраторы","грудь","../../assets/images/products/product_7.jpg","", 255),
        new Product(46, "Фаллоимитатор", "Фаллоимитаторы","ротики","../../assets/images/products/product_3.jpg","", 255),
        new Product(47, "Вибратор", "Вибраторы","попы","../../assets/images/products/product_5.jpg","", 255),
        new Product(48, "Вибратор 1", "Анальные игрушки","попы","../../assets/images/products/product_1.png","", 255),
        new Product(49, "Вибратор 2", "Женское здоровье","грудь","../../assets/images/products/product_2.png","", 255),
        new Product(50, "Вибратор 3", "Игрушки для мужчин","попы","../../assets/images/products/product_5.jpg","", 255),
        new Product(51, "Вибратор 4", "Аптечка и косметика","ротики","../../assets/images/products/product_6.jpg","", 255),
        new Product(52, "Фаллоимитатор 5", "БДСМ","грудь","../../assets/images/products/product_7.jpg","", 255),
        new Product(53, "Вибратор 6", "Эротическая одежда","попы","../../assets/images/products/product_2.png","", 255),
        new Product(54, "Вибратор 7", "Секс-бутик","ротики","../../assets/images/products/product_2.png","", 255),
        new Product(55, "Фаллоимитатор 8", "Акция","попы","../../assets/images/products/product_7.jpg","", 255),
        new Product(56, "Вибратор 9", "Вибраторы","ротики","../../assets/images/products/product_1.png","", 255),
        new Product(57, "Фаллоимитатор", "БДСМ","попы","../../assets/images/products/product_5.jpg","", 255),
        new Product(58, "БДСМ 3", "Акция","грудь","../../assets/images/products/product_3.jpg","", 255),
        new Product(59, "Вагина 5", "Фаллоимитаторы","ротики","../../assets/images/products/product_7.jpg","", 255),
        new Product(60, "БДСМ 4", "Вибраторы","попы","../../assets/images/products/product_3.jpg","", 255)
    ];

    getProducts(): Observable<Product[]> {
        return Observable.from([this.products]);
    }
}
