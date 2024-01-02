import { Component, EventEmitter, Output } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { LookupDataComponent } from '../lookup/lookup-data/lookup-data.component';
import { MessageService } from 'primeng/api';
import { SharedService } from 'src/app/service/shared.service';
import { DummyData } from './data-dummy';
import { Data } from './data.interface';

@Component({
  selector: 'app-child-tiga',
  templateUrl: './child-tiga.component.html',
  styleUrls: ['./child-tiga.component.scss'],
  providers: [MessageService],
})
export class ChildTigaComponent {
  @Output() dataEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() dataSelected = new EventEmitter<Data[]>();

  sendData: string = '';
  data: Data[] = DummyData;
  selectedRows: Data[] = [];
  loading = false;

  cols = [
    { header: 'ID', field: 'id' },
    { header: 'Name', field: 'name' },
    { header: 'Age', field: 'age' }
  ];

  constructor(    
    private dialogService: DialogService,
    private messageService: MessageService,
    private sharedService: SharedService,

    ){

  }


  sendDataFromChild3(){
    this.dataEmitter.emit(this.sendData);
  }

  lookupData(){
    const ref = this.dialogService.open(LookupDataComponent, {
      header: 'Lookup selected data dari Child 2',
      width: '70%',
      // data: this.data,
    });

    // Callback yang dipanggil setelah dialog ditutup
    ref.onClose.subscribe((selectedRows: any) => {
      if (selectedRows) {
        // Lakukan sesuatu dengan data yang dipilih setelah dialog ditutup
        console.log(selectedRows);
      }
    });
  }

  sendDataToChild2() {
    const dataToSend = 'Data dari child 3';
    this.sharedService.setResumeData('DATA_FROM_CHILD_3', dataToSend);

    console.log('CEK ', dataToSend);
    
  }

  onRowSelect(event: any) {
    console.log('Row selected:', event.data);
    this.dataSelected.emit([event.data]);
  }

  onRowUnselect(event: any) {
    console.log('Row unselected:', event.data);
    this.dataSelected.emit([]);
  }

  
}
