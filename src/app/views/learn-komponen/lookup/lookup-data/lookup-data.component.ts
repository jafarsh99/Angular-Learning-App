import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-lookup-data',
  templateUrl: './lookup-data.component.html',
  styleUrls: ['./lookup-data.component.scss'],
  providers: [MessageService],
})
export class LookupDataComponent implements OnInit{
  name: any;
  age: any;

  constructor(
    private sharedService: SharedService,
    private messageService: MessageService,
  ) {

  }
  ngOnInit(): void {
    this.initialize();
  
  }

  initialize() {
    const dataChild2 = this.sharedService.getParam('DATA');
    console.log('DATA ',dataChild2);

    if(dataChild2) {
    this.name = dataChild2.name;
    this.age = dataChild2.age;
    } else {
      console.log('KOSONG');
      
      this.messageService.add({
        severity: 'error',
        summary: 'Informasi',
        detail: `Data belum dipilih!`
      });
    }
  }

}
