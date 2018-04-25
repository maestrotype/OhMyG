import {Products} from './products';
 
export class ProductsService{
 
    private data: Products[] = [
        { title:"Фаллоимитаторы", imageurl:"../../assets/images/product_1.png",price:120},
        { title:"Eggs", imageurl:"../../assets/images/egg.png",price:220},
        { title:"Фаллоимитаторы", imageurl:"../assets/images/product_2.png",price:180},
        { title:"Eggs", imageurl:"../../assets/images/product_1.png",price:160},
        { title:"Фаллоимитаторы", imageurl:"../assets/images/egg.png",price:120},
        { title:"Eggs", imageurl:"../../assets/images/product_2.png",price:220},
        { title:"Фаллоимитаторы", imageurl:"../assets/images/product_1.png",price:180},
        { title:"Eggs", imageurl:"../../assets/images/egg.png",price:160}        
    ];

    length = this.data.length;

    getData(): Products[] {
         
        return this.data;
    }
    addData(title: string,imageurl: string, price: number){
         
        this.data.push(new Products(title,imageurl,price));
    }
}