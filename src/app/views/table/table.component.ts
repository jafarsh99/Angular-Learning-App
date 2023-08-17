import { Component } from '@angular/core';
import { Data } from './data.interface';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {

  data: Data[] = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'John Cena', age: 35 },
    { id: 3, name: 'John Russel', age: 25 },
    { id: 4, name: 'John Kirby', age: 27 },
    { id: 5, name: 'John Collins', age: 40 },
    { id: 6, name: 'John Zero', age: 40 },
    { id: 7, name: 'John Drak', age: 40 },
    { id: 8, name: 'John Vladimir', age: 40 },
    { id: 9, name: 'John Aust', age: 40 },
    { id: 10, name: 'John Collar', age: 40 },
  ];

  newData: Data = { id: 0, name: '', age: 0 };
  selectedRowData: Data | null = null;

  visible: boolean = false;
  selectedListTabelData: Data[] = [];
  actionValue: any;
  selectedRows: any[] = [];

  isSelected(data: any): boolean {
    return this.selectedRows.some(row => row.id === data.id);
  }

  onRowSelect(event: any) {
    if (!this.isSelected(event.data)) {
      this.selectedRows.push(event.data);
    }
    console.log('Row selected:', event.data);
    console.log("DATA DIPILIH: " + JSON.stringify(this.selectedRows));

  }

  onRowUnselect(event: any) {
    this.selectedRows = this.selectedRows.filter(row => row.id !== event.data.id);
    console.log('Row unselected:', event.data);
    console.log("DATA DIPILIH: " + JSON.stringify(this.selectedRows));
  }

  onHeaderCheckboxToggle(event: any) {
    if (event.checked) {
      this.selectedRows = this.data.slice();
    } else {
      this.selectedRows = [];
    }
    console.log('Header checkbox toggled:', event.checked);
    console.log("DATA DIPILIH: " + JSON.stringify(this.selectedRows));
  }

  saveData() {
    console.log("SAVE DATA");
  
    if (this.newData.id === 0 || this.newData.name === '' || this.newData.age === 0) {
      console.log("DATA KOSONG");
  
      // Form kosong, tidak melakukan tambah data
      this.visible = false;
      return;
    }
  
    if (this.selectedRowData) {
      console.log("EDIT DATA");
  
      // If selectedRowData is not null, it means we are editing an existing row
      const index = this.data.findIndex((item) => item.id === this.selectedRowData!.id);
      if (index !== -1) {
        // Update the existing row data with newData
        this.data[index] = { ...this.newData };
      }
    } else {
      console.log("TAMBAH DATA");
  
      // If selectedRowData is null, it means we are adding a new row
      // Generate a new ID for the new data (you can use a proper logic here)
      const newId = this.data.length > 0 ? this.data[this.data.length - 1].id + 1 : 1;
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
  
}
