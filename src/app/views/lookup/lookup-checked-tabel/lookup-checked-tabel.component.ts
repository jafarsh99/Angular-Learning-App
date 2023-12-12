import { Component, Input, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Data } from '../../table/data.interface';
import { DummyData } from '../../table/data-dummy';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-lookup-checked-tabel',
  templateUrl: './lookup-checked-tabel.component.html',
  styleUrls: ['./lookup-checked-tabel.component.scss'],
  providers: [MessageService],
})
export class LookupCheckedTabelComponent {
  @Input() selectedRows: Data[] = [];
  data: Data[] = DummyData;
  selectedRow: any;

  constructor(
    public ref: DynamicDialogRef, 
    public config: DynamicDialogConfig,
    private messageService: MessageService,

    ) {}

  ngOnInit() {
    // Mendapatkan data yang dikirim dari komponen utama
    console.log('CONFIG DATA ', this.config.data.selectedRows);
    
    if (this.config.data.selectedRows){
    this.selectedRows = this.config.data.selectedRows;
    } else {
    this.selectedRows = this.data;
    console.log('DATA ', this.data);
    
   }
    // ... Lakukan sesuatu dengan data yang telah dichecked sebelumnya
  }

  closeDialog() {
    this.ref.close();
  }

  onRowSelect(event: any) {
    this.selectedRow = event.data;
    // Lakukan sesuatu saat baris dipilih
    console.log('Row Selected:', this.selectedRow);
  }

  onRowUnselect(event: any) {
    this.selectedRow = [];
    // Lakukan sesuatu saat baris tidak dipilih lagi
    console.log('Row Unselected:', this.selectedRow);
  }

  PilihData() {
    if(this.selectedRow) {
      this.ref.close(this.selectedRow);
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Informasi',
        detail: `Data belum dipilih!`,
        key: 'main-toast',
      });
    }
  }

}
