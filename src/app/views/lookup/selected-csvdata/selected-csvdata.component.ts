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
    { field: 'keterangan', header: 'Keterangan', align: 'center', width: '100px' },
  ];

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    private messageService: MessageService,

  ) { }

  ngOnInit() {
    try {
      if (this.config.data && this.config.data.selectedRows) {
        this.selectedRows = this.config.data.selectedRows;
        this.totalRowCount = this.selectedRows.length;
      } else {
        this.selectedRows = [];
        this.totalRowCount = 0;
      }
    } catch (error) {
      console.error('Error initializing the component:', error);
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to initialize data.' });
    }
  }

  loadLazy(event: any) {
    // Implementasi paginasi sederhana
    this.loadingTable = true;
    setTimeout(() => {
      const startIndex = event.first;
      const endIndex = startIndex + event.rows;
      this.selectedRows = this.config.data.selectedRows.slice(startIndex, endIndex);
      this.loadingTable = false;
    }, 500); // Simulasikan delay load data
  }
}
