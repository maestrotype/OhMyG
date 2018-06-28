import { Component, Input, 
  OnInit,
  DoCheck,
  OnChanges,
 AfterContentInit, 
 AfterContentChecked, 
 AfterViewChecked, 
 AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit,
DoCheck,
OnChanges,
AfterContentInit, 
AfterContentChecked, 
AfterViewChecked, 
AfterViewInit {

  constructor() {}

  count:number=1;


        ngAfterViewChecked() {
  // this.log(`ngDoCheck`);
  // console.log(document.getElementById("script1"));
  
}

ngOnInit() {
  this.log(`ngOnInit`);
  if(document.getElementById("script1") != null) {
    document.getElementById("script1").remove();
    }
      var script1 = document.createElement("script");
      script1.setAttribute("id", "script1");
      script1.setAttribute("src", "./assets/js/jquery.min.js");
      document.body.appendChild(script1);
  
}
ngAfterContentChecked() {
   
}
ngOnChanges() {
   
  this.log(`ngOnChanges`);
}
ngAfterViewInit() {
   
  this.log(`ngAfterViewInit`);
}
ngDoCheck() {

  if(document.getElementById("script2") != null) {
    document.getElementById("script2").remove();
    }
    var script2 = document.createElement("script");
    script2.setAttribute("id", "script2");
    script2.setAttribute("src", "./assets/js/owl.carousel.min.js");
    document.body.appendChild(script2);

    if(document.getElementById("script4") != null) {  
    document.getElementById("script4").remove();
    }
    var script4 = document.createElement("script");
    script4.setAttribute("id", "script4");
    script4.setAttribute("src", "./assets/js/masonry.min.js");
    document.body.appendChild(script4);

    if(document.getElementById("script3") != null) {  
    document.getElementById("script3").remove();
    }
    var script3 = document.createElement("script");
    script3.setAttribute("id", "script3");
    script3.setAttribute("src", "./assets/js/script.js");
    document.body.appendChild(script3);    
   
  this.log(`ngDoCheck`);
}
ngAfterContentInit() {
  this.log(`ngAfterContentInit`);
}

private log(msg: string) {
    console.log(this.count + ". " + msg);
    this.count++;
}
}

