import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import {HeaderComponent} from './header/header.component';
// import { AboutUsComponent } from './about-us/about-us.component';
// import { BlogComponent } from './blog/blog.component';
// import { MainPageComponent } from './main-page/main-page.component';
// import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { PaginatorComponent } from './paginator/paginator.component';
// import { SearchComponent } from './search/search.component';
// import { ShippingComponent } from './shipping/shipping.component';
import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { StoreModule } from './store/store.module';
import { CategoryPageComponent } from './category-page/category-page.component';

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // AboutUsComponent,
    // BlogComponent,
    // MainPageComponent,
    // FooterComponent,
    // PaginatorComponent,
    // SearchComponent,
    // ShippingComponent,
    // CategoryComponent,
    // SubCategoryComponent,
    // ProductsComponent,
    // ProductComponent,
    // ProductCartComponent,
    // CategoryPageComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    StoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
