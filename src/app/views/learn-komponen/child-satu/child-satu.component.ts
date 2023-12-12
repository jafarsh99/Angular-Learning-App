import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child-satu',
  templateUrl: './child-satu.component.html',
  styleUrls: ['./child-satu.component.scss']
})
export class ChildSatuComponent {
  @Input() valueChild3: string = '';
  @Input() selectedDataFromChild2: any;

  child1Form = new FormGroup({
    selectedName: new FormControl(''),
    selectedAge: new FormControl(''),
  });
  
  constructor() {

  }
}
