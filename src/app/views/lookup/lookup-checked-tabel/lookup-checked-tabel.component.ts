import { Component, Input, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Data } from '../../table/data.interface';

@Component({
  selector: 'app-lookup-checked-tabel',
  templateUrl: './lookup-checked-tabel.component.html',
  styleUrls: ['./lookup-checked-tabel.component.scss']
})
export class LookupCheckedTabelComponent {
  @Input() selectedRows: Data[] = [];

  constructor(
    public ref: DynamicDialogRef, 
    public config: DynamicDialogConfig,
    ) {}

  ngOnInit() {
    // Mendapatkan data yang dikirim dari komponen utama
    this.selectedRows = this.config.data.selectedRows;
    
    // ... Lakukan sesuatu dengan data yang telah dichecked sebelumnya
  }

  closeDialog() {
    this.ref.close();
  }

}
