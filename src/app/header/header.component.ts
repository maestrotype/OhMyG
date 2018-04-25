import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  // elementRef: ElementRef; 
  visibility: boolean = true;
    // переключаем переменную
    toggle(){
        this.visibility=!this.visibility;
    }
  constructor() { }

  // ngAfterViewInit() {
  //   this.elementRef.nativeElement.querySelector('.logo');
  // }
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    // this.elementRef.nativeElement.querySelector('.logo').fadeOut();
    // this.message="Hello";
    this.visibility=false;
  }
  

  ngOnInit() {
  }

}
