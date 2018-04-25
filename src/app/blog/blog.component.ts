import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass'],
  encapsulation: ViewEncapsulation.Emulated
})
export class BlogComponent implements OnInit {
  name = "Andrey";
  constructor() { }

  ngOnInit() {
    
  }

}
