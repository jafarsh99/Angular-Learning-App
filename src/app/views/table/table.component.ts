import { Component } from '@angular/core';
import { Data } from './data.interface';
import { TableModule } from 'primeng/table';
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
      {id: 6, name: 'John Zero', age: 40},
      {id: 7, name: 'John Drak', age: 40},
      {id: 8, name: 'John Vladimir', age: 40},
      {id: 9, name: 'John Aust', age: 40},
      {id: 10, name: 'John Collar', age: 40},
    ];
}
