import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent }      from './blog/blog.component';
// import { MainPageComponent }      from './main-page/main-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ShippingComponent } from './shipping/shipping.component';
import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { ProductsComponent } from './products/products.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { ProductComponent } from './product/product.component';
import { StoreModule } from './store/store.module';
import { StoreComponent } from './store/store.component';
import { CategoryPageComponent } from './category-page/category-page.component';

const childRoutes: Routes = [
  // {outlet: "primary", path: "", component: CategoryComponent} ,
  { path: "products/:nameCategory", component: ProductComponent },
  // { path: "products", component: ProductComponent },
  // { path: "product", component: ProductComponent },
  // { path: "product-cart", component: ProductCartComponent },
  { path: "", component: CategoryComponent }
];
const routes: Routes = [
  { path: '', pathMatch: 'full',redirectTo: 'main-page' },
  { path: 'shipping', component: ShippingComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'main-page', component: StoreComponent },
  // { path: 'category-page/products', component: ProductsComponent},
  { path: 'category-page/:mode', component: CategoryPageComponent, children: childRoutes },
  { path: 'category-page/:mode', component: CategoryPageComponent },
  
  { path: 'category-page', component: CategoryPageComponent },
  
  
  { path: 'products', component: ProductsComponent },
  { path: 'products/:product', component: ProductComponent },
  { path: 'product-cart', component: ProductCartComponent },
  { path: 'about-us', component: AboutUsComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],    
  declarations: [ ],
bootstrap:    [ StoreComponent ],
  exports: [ RouterModule ]
})

    
export class AppRoutingModule {}