import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-selected-csvdata',
  templateUrl: './selected-csvdata.component.html',
  styleUrls: ['./selected-csvdata.component.scss']
})
export class SelectedCSVdataComponent {
  @Input() selectedRows = [];
  data = [];


  totalRowCount = 0;
  loadingTable: boolean = false;

  cols = [
    { field: 'no', header: 'No', align: 'center', width: '30px' },
    { field: 'ba', header: 'BA', align: 'center', width: '30px' },
    { field: 'es1', header: 'Es1', align: 'center', width: '30px' },
    { field: 'kodeSatker', header: 'Kode Satker', align: 'center', width: '50px' },
    { field: 'uakpb', header: 'Kode UAKPB', align: 'center', width: '130px' },
    { field: 'kodeBarang', header: 'Kode Barang', align: 'center' },
    { field: 'nup', header: 'NUP', align: 'center', width: '30px' },
    { field: 'nomor', header: 'Nomor Dokumen Koreksi', align: 'center', width: '50px' },
    { field: 'nilaiBrutoSemula', header: 'Nilai Aset (Bruto) Semula', format: 'currency' },
    { field: 'nilaiBrutoMenjadi', header: 'Nilai Aset (Bruto) Menjadi', format: 'currency' },
    { field: 'selisihBruto', header: 'Selisih Nilai Bruto', format: 'currency' },
    { field: 'nilaiBukuSemula', header: 'Nilai Buku Semula', format: 'currency' },
    { field: 'nilaiBukuMenjadi', header: 'Nilai Buku Menjadi', format: 'currency' },
    { field: 'selisihNilaiBuku', header: 'Selisih Nilai Buku', format: 'currency' },
    { field: 'statAsetSemula', header: 'Status Aset Semula', align: 'center' },
    { field: 'statusAsetMenjadi', header: 'Status Aset Menjadi', align: 'center' },
    { field: 'kuantitasLuasSemula', header: 'Kuantitas (Luas) Semula', align: 'center', format: 'currency' },
    { field: 'kuantitasLuasMenjadi', header: 'Kuantitas (Luas) Menjadi', align: 'center', format: 'currency' },
    { field: 'selisihLuas', header: 'Selisih Luas', align: 'center', format: 'currency', width: '40px' },
    { field: 'keterangan', header: 'Keterangan', align: 'center' , width: '100px' },
  ];

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

}
