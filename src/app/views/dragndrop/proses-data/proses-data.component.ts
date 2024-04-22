import { Component, Input } from '@angular/core';
import { Product } from '../data.interface';
import { DummyProduct } from '../data-dummy';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-proses-data',
  templateUrl: './proses-data.component.html',
  styleUrls: ['./proses-data.component.scss']
})
export class ProsesDataComponent {

  @Input() selectedRows: Product[] = [];
  data: Product[] = DummyProduct;
  selectedRow: any;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,

  ) { }

  ngOnInit() {
    // Mendapatkan data yang dikirim dari komponen utama
    console.log('CONFIG DATA ', this.config.data.selectedRows);

    if (this.config.data.selectedRows) {
      this.selectedRows = this.config.data.selectedRows;
    } else {
      this.selectedRows = this.data;
      console.log('DATA ', this.data);

    }
  }

  getProductTotalPrice(product: Product): number {
    return product.price * (product.quantity || 0);
  }

  getTotalItems(): number {
    return this.selectedRows.reduce((acc, product) => acc + (product.quantity || 0), 0);
  }

  getTotalPrice(): number {
    return this.selectedRows.reduce((acc, product) => acc + this.getProductTotalPrice(product), 0);
  }

  closeDialog() {
    this.ref.close();
  }
}
