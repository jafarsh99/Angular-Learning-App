import { Component } from '@angular/core';
import { Data } from './data.interface';
import { TableModule } from 'primeng/table';
import { MessageService } from 'primeng/api';
import { DummyData } from './data-dummy';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [MessageService],
})
export class TableComponent {
 
  data: Data[] = DummyData;
  

  newData: Data = { id: 0, name: '', age: 0 };
  selectedRowData: Data | null = null;

  visible: boolean = false;
  selectedListTabelData: Data[] = [];
  actionValue: any;
  selectedRows: any[] = [];
  data_: any;
  selectedData: any;

  searchColumns: string[] = ['id', 'name', 'age']; // Kolom yang dapat dicari
  selectedSearchColumn: string = 'id'; // Kolom pencarian yang dipilih
  searchText: string = '';

  filteredData: Data[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.filteredData = this.data;
  }

  isSelected(data: any): boolean {
    return this.selectedRows.some((row) => row.id === data.id);
  }

  onRowSelect(event: any) {
    if (!this.isSelected(event.data)) {
      this.selectedRows.push(event.data);
    }
    console.log('Row selected:', event.data);
    console.log('DATA DIPILIH: ' + JSON.stringify(this.selectedRows));
  }

  onRowUnselect(event: any) {
    this.selectedRows = this.selectedRows.filter(
      (row) => row.id !== event.data.id
    );
    console.log('Row unselected:', event.data);
    console.log('DATA DIPILIH: ' + JSON.stringify(this.selectedRows));
  }

  onHeaderCheckboxToggle(event: any) {
    if (event.checked) {
      this.selectedRows = this.data.slice();
    } else {
      this.selectedRows = [];
    }
    console.log('Header checkbox toggled:', event.checked);
    console.log('DATA DIPILIH: ' + JSON.stringify(this.selectedRows));
  }

  saveData() {
    console.log('SAVE DATA');

    if (
      this.newData.id === 0 ||
      this.newData.name === '' ||
      this.newData.age === 0
    ) {
      console.log('DATA KOSONG');

      // Form kosong, tidak melakukan tambah data
      this.visible = false;
      return;
    }

    if (this.selectedRowData) {
      console.log('EDIT DATA');

      // If selectedRowData is not null, it means we are editing an existing row
      const index = this.data.findIndex(
        (item) => item.id === this.selectedRowData!.id
      );
      if (index !== -1) {
        // Update the existing row data with newData
        this.data[index] = { ...this.newData };
      }
    } else {
      console.log('TAMBAH DATA');

      // If selectedRowData is null, it means we are adding a new row
      // Generate a new ID for the new data (you can use a proper logic here)
      const newId =
        this.data.length > 0 ? this.data[this.data.length - 1].id + 1 : 1;
      this.newData.id = newId;
      // "unshift" taruh data baru ke paling atas tabel
      this.data.unshift(this.newData);
    }

    // Reset the newData and selectedRowData variables
    this.newData = { id: 0, name: '', age: 0 };
    this.selectedRowData = null;

    this.visible = false;
  }

  editData(item: Data) {
    // Set the selected row data for editing
    this.selectedRowData = { ...item };
    // Show the dialog
    this.visible = true;
  }

  deleteData(item: Data) {
    const index = this.data.indexOf(item);
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }

  showDialog() {
    this.selectedRowData = null;
    this.visible = true;
  }
  showEditDialog() {
    if (this.selectedRowData) {
      // Copy the selected row's data to newData for editing
      this.newData = { ...this.selectedRowData };
    } else {
      this.selectedRowData = null;
      this.newData = { id: 0, name: '', age: 0 };
    }
    this.visible = true;
  }

  onRowSelect2(event: any) {
    this.messageService.add({
      severity: 'info',
      summary: 'Product Selected',
      detail: '',
    });
  }

  onRowUnselect2(event: any) {
    this.messageService.add({
      severity: 'info',
      summary: 'Product Unselected',
      detail: '',
    });
  }

  search() {
    this.filteredData = this.data.filter((item) =>
      item[this.selectedSearchColumn as keyof Data]
        .toString()
        .toLowerCase()
        .includes(this.searchText.toLowerCase())
    );
  }

  batal(){
    this.selectedRows = [];
    console.log('DATA DIPILIH: ' + JSON.stringify(this.selectedRows));
  }
}
