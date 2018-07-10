
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { ProductsService } from '../products.service';
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { PostsService } from '../model/posts.service';
// import {Products} from '../products';
import {Posts} from '../model/posts';
// import {trigger, state, style, transition, animate,keyframes} from '@angular/animations';
import {myAnimation} from '../carousel.animations';
// import {owl_carousel} from '../../assets/js/script';
declare var jQuery:any;

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.sass'],
  providers: [ProductRepository, PostsService],
  animations: [myAnimation],
  
})

export class StoreComponent implements OnInit { 
state:string;
items: Product[] = [];
posts: Posts[] = [];
padding: string;
translate: string;
count = 0;
count2 = 0;
myDate = new Date();

  constructor(private dataService: ProductRepository,private dataService2: PostsService) {
    
   }

  addItem(id:number, name: string,category: string, nameCategory: string, imageUrl: string,description: string, price: number){
         
    this.dataService.addData(id,name,category, nameCategory, imageUrl,description,price);
}

  getPrev(){ 
    // this.items.unshift(this.items[this.dataService.length-1]);
    // this.items.pop();
    if(this.count < -270) {
      this.count = 0
    }
    this.count = this.count - 270;
    this.padding =  'translateX(' + this.count + 'px)';
    // console.log(this.padding);
    console.log(this.padding);
  }
  
  getNext(){
    // this.items.push(this.items[0]);
    // this.items.shift();
    if(this.count > 270) {
      this.count = 0
    }
    this.count = this.count + 270;
    // this.padding = "{'padding-left' : " + "'" + this.count + "px'}";
    this.padding =  'translateX(' + this.count + 'px)';
    // this.padding = "'" + this.count + "'px'}";
    console.log(this.padding);
  }

  Next() {
    if(this.count2 < -900) {
      this.count2 = 0
    }
    this.count2 = this.count2 - 300;
    this.translate =  'translateX(' + this.count2 + 'px)';
  }

  move(n:string) {
    // console.log(n);
    this.state = (this.state === n ? 'prev':'next');
    this.state === n ? console.log(n):console.log(n);
  }

  ngOnInit() {
    this.items = this.dataService.topProduct();
    this.posts = this.dataService2.getData();
    setInterval(() => {
      this.getNext();
    }, 4000);
    setInterval(() => {
      this.Next();
    }, 4000);
  }
  
  ngAfterInit() {
    
    // setInterval(() => {
    //   this.getNext();
    // }, 1000);
  }

}

