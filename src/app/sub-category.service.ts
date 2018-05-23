import { SubCategory } from "./sub-category";

export class SubCategoryService {
  private data: SubCategory[] = [
    {
      name: "С вибрацией 1",
      imageUrl: "../../assets/images/product_category/image_1.jpg",
      category: "Фаллоимитаторы"
    },

    {
      name: "С вибрацией 2",
      imageUrl: "../../assets/images/product_category/image_2.jpg",
      category: "Фаллоимитаторы"
    },
    {
      name: "С вибрацией 3",
      imageUrl: "../../assets/images/product_category/image_3.jpg",
      category: "Фаллоимитаторы"
    },
    {
        name: "С вибрацией 4",
        imageUrl: "../../assets/images/product_category/image_6.jpg",
        category: "Фаллоимитаторы"
      },
      {
        name: "С вибрацией 5",
        imageUrl: "../../assets/images/product_category/image_5.jpg",
        category: "Фаллоимитаторы"
      },
      {
        name: "С вибрацией 6",
        imageUrl: "../../assets/images/product_category/image_7.jpg",
        category: "Фаллоимитаторы"
      },
      {
        name: "С вибрацией 7",
        imageUrl: "../../assets/images/product_category/image_9.jpg",
        category: "Фаллоимитаторы"
      },
      {
        name: "С вибрацией 8",
        imageUrl: "../../assets/images/product_category/image_2.jpg",
        category: "Фаллоимитаторы"
      },
      {
        name: "С вибрацией 9",
        imageUrl: "../../assets/images/product_category/image_3.jpg",
        category: "Фаллоимитаторы"
      },
    {
      category: "Вибраторы",
      name: "Вагины",
      imageUrl: "../../assets/images/product_category/image_7.jpg",
    },
    {
      category: "Вибраторы",
      name: "Вагины",
      imageUrl: "../../assets/images/product_category/image_9.jpg",
    },
    {
      category: "Вибраторы",
      name: "Вагины",
      imageUrl: "../../assets/images/product_category/image_5.jpg",
    },
    {
      category: "Вибраторы",
      name: "Вагины",
      imageUrl: "../../assets/images/product_category/image_4.jpg",
    },
    {
        category: "Анальные игрушки",
        name: "Вагины",
        imageUrl: "../../assets/images/product_category/image_7.jpg",
      },
    {
      category: "Анальные игрушки",
      name: "игрушка",
      imageUrl: "../../assets/images/product_category/image_3.jpg"
    },
    {
        category: "Анальные игрушки",
        name: "игрушка",
        imageUrl: "../../assets/images/product_category/image_6.jpg"
      },
      {
        category: "Анальные игрушки",
        name: "игрушка",
        imageUrl: "../../assets/images/product_category/image_7.jpg"
      },
      {
        category: "Анальные игрушки",
        name: "игрушка",
        imageUrl: "../../assets/images/product_category/image_6.jpg"
      },
      {
        category: "Анальные игрушки",
        name: "игрушка",
        imageUrl: "../../assets/images/product_category/image_4.jpg"
      },
      {
        category: "Анальные игрушки",
        name: "игрушка",
        imageUrl: "../../assets/images/product_category/image_2.jpg"
      },
      {
        category: "Анальные игрушки",
        name: "игрушка",
        imageUrl: "../../assets/images/product_category/image_9.jpg"
      },
    {
      category: "Женское здоровье",
      name: "Вагины",
      imageUrl: "../../assets/images/product_category/image_6.jpg"
    },
    {
        category: "Женское здоровье",
        name: "клизма",
        imageUrl: "../../assets/images/product_category/image_4.jpg"
      },
      {
        category: "Женское здоровье",
        name: "клизма",
        imageUrl: "../../assets/images/product_category/image_6.jpg"
      },
      {
        category: "Женское здоровье",
        name: "клизма",
        imageUrl: "../../assets/images/product_category/image_9.jpg"
      },
      {
        category: "Женское здоровье",
        name: "клизма",
        imageUrl: "../../assets/images/product_category/image_4.jpg"
      },
      {
        category: "Женское здоровье",
        name: "клизма",
        imageUrl: "../../assets/images/product_category/image_3.jpg"
      },
      {
        category: "Женское здоровье",
        name: "клизма",
        imageUrl: "../../assets/images/product_category/image_5.jpg"
      },
      {
        category: "Женское здоровье",
        name: "клизма",
        imageUrl: "../../assets/images/product_category/image_1.jpg"
      },
      {
        category: "Женское здоровье",
        name: "клизма",
        imageUrl: "../../assets/images/product_category/image_9.jpg"
      },
      {
        category: "Женское здоровье",
        name: "клизма",
        imageUrl: "../../assets/images/product_category/image_8.jpg"
      },
      {
        category: "Женское здоровье",
        name: "клизма",
        imageUrl: "../../assets/images/product_category/image_10.jpg"
      },

    {
      category: "Игрушки для мужчин",
      name: "Вагины",
      imageUrl: "../../assets/images/product_category/image_7.jpg"
    },
    {
      category: "Аптечка и косметика",
      name: "Вагины",
      imageUrl: "../../assets/images/product_category/image_8.jpg"
    },
    {
      category: "БДСМ",
      name: "Вагины",
      imageUrl: "../../assets/images/product_category/image_9.jpg"
    },
    {
      category: "Эротическая одежда",
      name: "Вагины",
      imageUrl: "../../assets/images/product_category/image_10.jpg"
    },
    {
      category: "Секс-бутик",
      name: "",
      imageUrl: "../../assets/images/product_category/image_11.jpg"
    },
    {
      category: "Акции",
      name: "Вагины",
      imageUrl: "../../assets/images/product_category/image_12.jpg"
    }
  ];
  getData(): SubCategory[] {
    return this.data;
  }
  addData(category: string, name: string, imageUrl: string) {
    this.data.push(new SubCategory(category, name, imageUrl));
  }
}
