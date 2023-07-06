import { Component } from '@angular/core';
import { Data } from './data.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
    data: Data[] = [
      {id: 1, name: 'John Doe', age: 30},
      {id: 2, name: 'John Cena', age: 35},
      {id: 3, name: 'John Russel', age: 25},
      {id: 4, name: 'John Kirby', age: 27},
      {id: 5, name: 'John Collins', age: 40},
    ];
}
