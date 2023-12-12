import { Component, EventEmitter, Output } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { LookupCheckedTabelComponent } from '../../lookup/lookup-checked-tabel/lookup-checked-tabel.component';
import { Data } from '../../table/data.interface';
import { DummyData } from '../../table/data-dummy';

@Component({
  selector: 'app-child-dua',
  templateUrl: './child-dua.component.html',
  styleUrls: ['./child-dua.component.scss']
})
export class ChildDuaComponent {
  @Output() dataChild2: EventEmitter<string> = new EventEmitter<string>();
  data: Data[] = DummyData;

  constructor(
    private dialogService: DialogService,
  ) {

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
        // Lakukan sesuatu dengan data yang dipilih setelah dialog ditutup
        console.log(selectedRows);
      }
    });
  }
}
