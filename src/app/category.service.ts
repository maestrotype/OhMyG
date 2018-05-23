import {Category} from './category';
 
export class CategoryService{
 
    private data: Category[] = [
        { category:"Фаллоимитаторы"},
        // { category:"First"},
        // { category:"Second"},
        // { category:"Third"},
        // { category:"Forth"},

        { category: "Вибраторы"},
        { category: "Анальные игрушки"},
        { category: "Женское здоровье"},
        { category: "Игрушки для мужчин"},
        { category: "Аптечка и косметика"},
        { category: "БДСМ"},
        { category: "Эротическая одежда"},
        { category: "Секс-бутик"},
        { category: "Акции"}
    ];
    getData(): Category[] {
         
        return this.data;
    }
    addData(category: string){
         
        this.data.push(new Category(category));
    }
}