import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-child-satu',
  templateUrl: './child-satu.component.html',
  styleUrls: ['./child-satu.component.scss']
})
export class ChildSatuComponent {
  @Input() valueChild3: string = '';
  @Input() selectedDataFromChild2: any;


  private subscription!: Subscription;

  child1Form = new FormGroup({
    selectedName: new FormControl({ value: '', disabled: false }),
    selectedAge: new FormControl({ value: '', disabled: false }),
  });
  
  constructor(
    private sharedService: SharedService,
  ) {
    this.subscription = this.sharedService.resume.subscribe(({ key, data }) => {
      if (key === 'DATA_KE_CHILD_1') {
        this.valueChild3 = data;
      }
      console.log('DORR');
      
    });
  }

  ngOninit() {
  }
}
