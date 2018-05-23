import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent }      from './blog/blog.component';
import { MainPageComponent }      from './main-page/main-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ShippingComponent } from './shipping/shipping.component';
import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { ProductsComponent } from './products/products.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { ProductComponent } from './product/product.component';

const childRoutes: Routes = [
  { path: "products", component: ProductsComponent },
  { path: "product", component: ProductComponent },
  { path: "product-cart", component: ProductCartComponent },
  { path: "", component: ProductComponent }
];
const routes: Routes = [
  { path: '', pathMatch: 'full',redirectTo: 'main-page' },
  { path: 'shipping', component: ShippingComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'category-page/products', component: ProductsComponent},
  // { path: 'category-page/:category', component: CategoryComponent, children: childRoutes },
  { path: 'category-page', component: CategoryComponent },
  
  { path: 'products', component: ProductsComponent },
  { path: 'products/:product', component: ProductComponent },
  { path: 'product-cart', component: ProductCartComponent },
  { path: 'about-us', component: AboutUsComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],    
//   declarations: [ 
//   MainPageComponent, CategoryComponent,
//   ProductComponent, ProductComponent, ProductCartComponent
// ],
// bootstrap:    [ MainPageComponent ],
  exports: [ RouterModule ]
})

    
export class AppRoutingModule {}