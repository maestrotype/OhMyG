import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductsService } from '../products.service';
import { PostsService } from '../posts.service';
import {Products} from '../products';
import {Posts} from '../posts';
// import {trigger, state, style, transition, animate,keyframes} from '@angular/animations';
import {myAnimation} from '../carousel.animations';
// import {owl_carousel} from '../../assets/js/script';
declare var jQuery:any;

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass'],
  providers: [ProductsService, PostsService],
  animations: [myAnimation],
  
})

export class MainPageComponent implements OnInit { 
state:string;
items: Products[] = [];
posts: Posts[] = [];

myDate = new Date();

  constructor(private dataService: ProductsService,private dataService2: PostsService) {
    
   }

  addItem(title: string,imageurl: string, price: number){      
    this.dataService.addData(title,imageurl,price);
  }

  getPrev(){ 
    this.items.unshift(this.items[this.dataService.length-1]);
    this.items.pop();
  }
  
  getNext(){
    this.items.push(this.items[0]);
    this.items.shift();
  }

  move(n:string) {
    // console.log(n);
    this.state = (this.state === n ? 'prev':'next');
    this.state === n ? console.log(n):console.log(n);
  }

  ngOnInit() {
    this.items = this.dataService.getData();
    this.posts = this.dataService2.getData();
    setInterval(() => {
      this.getNext();
    }, 4000);
  }
  
  ngAfterInit() {
    
    setInterval(() => {
      this.getNext();
    }, 1000);
  }

}
