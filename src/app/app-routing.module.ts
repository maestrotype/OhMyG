import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent }      from './blog/blog.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ShippingComponent } from './shipping/shipping.component';
import { CategoryComponent } from './category/category.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { ProductComponent } from './product/product.component';
import { StoreModule } from './store/store.module';
import { StoreComponent } from './store/store.component';
import { CategoryPageComponent } from './category-page/category-page.component';

const childedRoutes: Routes = [
  // { path: "product-cart", component: ProductCartComponent },
  
  {outlet: "cart", path: "", component: ProductCartComponent} ,
  { path: "product-cart/:id", component: ProductCartComponent },
  { path: "", component: ProductCartComponent }
];
const childRoutes: Routes = [
  // {outlet: "primary", path: "", component: CategoryComponent} ,
  // {outlet: "products", path: "", component: ProductComponent} ,
  
  { path: "products/:nameCategory/product-cart/:id", component: ProductCartComponent },
  // { path: "products/:nameCategory", component: ProductComponent, children: childedRoutes},
  { path: "products/:nameCategory", component: ProductComponent },
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
  { path: 'products/:product', component: ProductComponent },
  { path: "product-cart/:id", component: ProductCartComponent },
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