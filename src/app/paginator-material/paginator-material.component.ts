import { Component } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-paginator-material',
  templateUrl: './paginator-material.component.html',
  styleUrls: ['./paginator-material.component.sass'],
  
})
export class PaginatorMaterialComponent {

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}