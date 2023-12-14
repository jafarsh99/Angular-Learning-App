import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { LookupCheckedTabelComponent } from '../../lookup/lookup-checked-tabel/lookup-checked-tabel.component';
import { Data } from '../../table/data.interface';
import { DummyData } from '../../table/data-dummy';
import { SharedService } from 'src/app/service/shared.service';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-child-dua',
  templateUrl: './child-dua.component.html',
  styleUrls: ['./child-dua.component.scss'],
  providers: [MessageService],

})
export class ChildDuaComponent implements OnInit{
  @Output() dataChild2: EventEmitter<string> = new EventEmitter<string>();
  data: Data[] = DummyData;
  valueChild3: string = '';
  private subscription!: Subscription;

  constructor(
    private dialogService: DialogService,
    private sharedService: SharedService,
    private messageService: MessageService
  ) {
    this.subscription = this.sharedService.resume.subscribe(({ key, data }) => {
      if (key === 'DATA_FROM_CHILD_3') {
        this.valueChild3 = data;
      }
      console.log('DORR');
      
    });

  }
  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  LookupData() {
    const ref = this.dialogService.open(LookupCheckedTabelComponent, {
      header: 'Lookup Data',
      width: '70%',
      data: this.data,
    });

    // Callback yang dipanggil setelah dialog ditutup
    ref.onClose.subscribe((selectedRows: any) => {
      if (selectedRows) {

        this.dataChild2.emit(selectedRows);
        this.sharedService.setParam('DATA', selectedRows);
        // Lakukan sesuatu dengan data yang dipilih setelah dialog ditutup
        console.log(selectedRows);
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Informasi',
          detail: `Data belum dipilih!`
        });
      }
    });
  }
}
