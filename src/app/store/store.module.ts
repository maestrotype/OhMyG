import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { SideMenuComponent } from "../side-menu/side-menu.component";
import { StoreComponent } from "./store.component";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { SearchComponent } from "../search/search.component";
import { AboutUsComponent } from "../about-us/about-us.component";
import { BlogComponent } from "../blog/blog.component";
import { PaginatorComponent } from "../paginator/paginator.component";
import { ShippingComponent } from "../shipping/shipping.component";
import { CategoryComponent } from "../category/category.component";
import { SubCategoryComponent } from "../sub-category/sub-category.component";
import { ProductsComponent } from "../products/products.component";
import { ProductComponent } from "../product/product.component";
import { ProductCartComponent } from "../product-cart/product-cart.component";
import { CategoryPageComponent } from "../category-page/category-page.component";


@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    declarations: [
        SideMenuComponent, 
        FooterComponent, 
        PaginatorComponent, 
        BlogComponent, 
        HeaderComponent,
        AboutUsComponent, 
        SearchComponent, 
        StoreComponent,
        ShippingComponent,
        CategoryComponent,
        SubCategoryComponent,
        ProductsComponent,
        ProductComponent,
        ProductCartComponent,
        CategoryPageComponent  
        ],
        exports: [SideMenuComponent]
})
export class StoreModule { }
