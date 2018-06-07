import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { SideMenuComponent } from "../side-menu/side-menu.component";
import { RouterModule } from "@angular/router";


@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    declarations: [SideMenuComponent],
    exports: [SideMenuComponent]
})
export class StoreModule { }
