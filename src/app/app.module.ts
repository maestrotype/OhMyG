import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from './store/store.module';




@NgModule({
  declarations: [
    AppComponent,
    // FormFieldMaterialComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    StoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
