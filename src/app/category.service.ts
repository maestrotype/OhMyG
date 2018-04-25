import {Category} from './category';
 
export class CategoryService{
 
    private data: Category[] = [
        { name:"Фаллоимитаторы"},
        { name: "Вибраторы"},
        { name: "Анальные игрушки"},
        { name: "Женское здоровье"},
        { name: "Игрушки для мужчин"},
        { name: "Аптечка и косметика"},
        { name: "БДСМ"},
        { name: "Эротическая одежда"},
        { name: "Секс-бутик"},
        { name: "Акции"}
    ];
    getData(): Category[] {
         
        return this.data;
    }
    addData(name: string){
         
        this.data.push(new Category(name));
    }
}