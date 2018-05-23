import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})


export class HeaderComponent implements OnInit {
  // elementRef: ElementRef; 
  visibility: boolean = true;

    toggle(){
        this.visibility=!this.visibility;
    }
  constructor() { }

  // ngAfterViewInit() {
  //   this.elementRef.nativeElement.querySelector('.logo');
  // }
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    this.visibility=false;
  }
  

  ngOnInit() {
  }

}
