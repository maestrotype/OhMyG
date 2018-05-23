import { Product } from "./product";

export class ProductService {
  private data: Product[] = [
    {
      categoryName: "С вибрацией 1",
      imageUrl: "../../assets/images/products/product_3.jpg",
      price: 255,
      category: "Фаллоимитаторы",
      name: "Вагины"
    },

    {
      categoryName: "С вибрацией 2",
      imageUrl: "../../assets/images/product_1.png",
      price: 255,
      category: "Фаллоимитаторы"
    },
    {
      categoryName: "С вибрацией 3",
      imageUrl: "../../assets/images/product_2.png",
      price: 255,
      category: "Фаллоимитаторы"
    },
    {
      categoryName: "С вибрацией 4",
      imageUrl: "../../assets/images/products/product_2.jpg",
      price: 255,
        category: "Фаллоимитаторы"
      },
      {
        categoryName: "С вибрацией 5",
        imageUrl: "../../assets/images/products/product_2.jpg",
        price: 255,
        category: "Фаллоимитаторы"
      },
      {
        categoryName: "С вибрацией 6",
        imageUrl: "../../assets/images/products/product_2.jpg",
        price: 255,
        category: "Фаллоимитаторы"
      },
      {
        categoryName: "С вибрацией 7",
        imageUrl: "../../assets/images/products/product_2.jpg",
        price: 255,
        category: "Фаллоимитаторы"
      },
      {
        categoryName: "С вибрацией 8",
        imageUrl: "../../assets/images/products/product_2.jpg",
        price: 255,
        category: "Фаллоимитаторы"
      },
      {
        categoryName: "С вибрацией 9",
        imageUrl: "../../assets/images/products/product_2.jpg",
        price: 255,
        category: "Фаллоимитаторы"
      },
    { 
      categoryName: "Вагины",
      imageUrl: "../../assets/images/products/product_2.jpg",
      price: 255,
      category: "Вибраторы",
    },
    {
      
      categoryName: "Вагины",
      imageUrl: "../../assets/images/products/product_2.jpg",
      price: 255,
      category: "Вибраторы",
    },
    {
      
      categoryName: "Вагины",
      imageUrl: "../../assets/images/products/product_2.jpg",
      price: 255,
      category: "Вибраторы",
    },
    {
      
      categoryName: "Вагины",
      imageUrl: "../../assets/images/products/product_2.jpg",
      price: 255,
      category: "Вибраторы"
    },
    {
        
        categoryName: "Вагины",
        imageUrl: "../../assets/images/products/product_2.jpg",
        price: 255,
        category: "Анальные игрушки"
      },
    {
      
      categoryName: "игрушка",
      imageUrl: "../../assets/images/products/product_2.jpg",
      price: 255,
      category: "Анальные игрушки"
    },
    {
        
        categoryName: "игрушка",
        imageUrl: "../../assets/images/products/product_2.jpg",
        price: 255,
        category: "Анальные игрушки"
      },
      {
        
        categoryName: "игрушка",
        imageUrl: "../../assets/images/products/product_2.jpg",
        price: 255,
        category: "Анальные игрушки"
      },
      {
        
        categoryName: "игрушка",
        imageUrl: "../../assets/images/products/product_2.jpg",
        price: 255,
        category: "Анальные игрушки"
      },
      {
        
        categoryName: "игрушка",
        imageUrl: "../../assets/images/products/product_2.jpg",
        price: 255,
        category: "Анальные игрушки"
      },
      {
        
        categoryName: "игрушка",
        imageUrl: "../../assets/images/products/product_2.jpg",
        price: 255,
        category: "Анальные игрушки"
      },
      {
        
        categoryName: "игрушка",
        imageUrl: "../../assets/images/products/product_2.jpg",
        price: 255,
        category: "Анальные игрушки"
      },
    {
      
      categoryName: "Вагины",
      imageUrl: "../../assets/images/products/product_2.jpg",
      price: 255,
      category: "Женское здоровье"
    },
    {
        
        categoryName: "клизма",
        imageUrl: "../../assets/images/products/product_2.jpg",
        price: 255,
        category: "Женское здоровье"
      },
      {
        
        categoryName: "клизма",
        imageUrl: "../../assets/images/products/product_2.jpg",
        price: 255,
        category: "Женское здоровье"
      },
      {
        
        categoryName: "клизма",
        imageUrl: "../../assets/images/products/product_2.jpg",
        price: 255,
        category: "Женское здоровье"
      },
      {
        
        categoryName: "клизма",
        imageUrl: "../../assets/images/products/product_2.jpg",
        price: 255,
        category: "Женское здоровье"
      },
      {
        
        categoryName: "клизма",
        imageUrl: "../../assets/images/products/product_2.jpg",
        price: 255,
        category: "Женское здоровье"
      },
      {
        
        categoryName: "клизма",
        imageUrl: "../../assets/images/products/product_2.jpg",
        price: 255,
        category: "Женское здоровье"
      },
      {
        
        categoryName: "клизма",
        imageUrl: "../../assets/images/products/product_2.jpg",
        price: 255,
        category: "Женское здоровье"
      },
      {
        
        categoryName: "клизма",
        imageUrl: "../../assets/images/products/product_2.jpg",
        price: 255,
        category: "Женское здоровье"
      },
      {
        
        categoryName: "клизма",
        imageUrl: "../../assets/images/products/product_2.jpg",
        price: 255,
        category: "Женское здоровье"
      },
      {
        
        categoryName: "клизма",
        imageUrl: "../../assets/images/products/product_2.jpg",
        price: 255,
        category: "Женское здоровье"
      },

    {
      
      categoryName: "Вагины",
      imageUrl: "../../assets/images/product_1.png",
      price: 255,
      category: "Игрушки для мужчин"
    },
    {
      
      categoryName: "Вагины",
      imageUrl: "../../assets/images/products/product_5.jpg",
      price: 255,
      category: "Аптечка и косметика"
    },
    {
      
      categoryName: "Вагины",
      imageUrl: "../../assets/images/products/product_3.jpg",
      price: 255,
      category: "БДСМ"
    },
    {
      
      categoryName: "Вагины",
      imageUrl: "../../assets/images/products/product_2.jpg",
      price: 255,
      category: "Эротическая одежда"
    },
    {
      
      categoryName: "Вагины2",
      imageUrl: "../../assets/images/products/product_2.jpg",
      price: 255,
      category: "Секс-бутик"
    },
    { 
      categoryName: "Вагины",
      imageUrl: "../../assets/images/products/product_2.jpg",
      price: 255,
      category: "Акции"
    }
  ];
  getData(): Product[] {
    return this.data;
  }
  addData(categoryName: string, imageUrl: string, price: number, category: string) {
    this.data.push(new Product(categoryName, imageUrl, price, category));
  }
}
