import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PostsService } from '../posts.service';
import {Posts} from '../posts';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass'],
  providers: [PostsService],
  encapsulation: ViewEncapsulation.Emulated
})
export class BlogComponent implements OnInit {
  posts: Posts[] = [];

  myDate = new Date();

  constructor(private dataService: PostsService) {

   }
  ngOnInit() {
    this.posts = this.dataService.getData();
  }

}
