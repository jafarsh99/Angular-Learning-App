import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-satu',
  templateUrl: './child-satu.component.html',
  styleUrls: ['./child-satu.component.scss']
})
export class ChildSatuComponent {
  @Input() valueChild3: string = '';
  
  constructor() {

  }
}
