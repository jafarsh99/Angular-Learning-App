import { Component } from '@angular/core';
import { Product } from '../data.interface';
import { PrimeNGConfig } from 'primeng/api';
import { DummyProduct } from '../data-dummy';
import { DialogService } from 'primeng/dynamicdialog';
import { ProsesDataComponent } from '../proses-data/proses-data.component';


@Component({
  selector: 'app-dragndrop',
  templateUrl: './dragndrop.component.html',
  styleUrls: ['./dragndrop.component.scss']
})
export class DragndropComponent {

  availableProducts: Product[] = DummyProduct;

  selectedProducts: Product[] = [];
    
  draggedProduct: Product | null = null;
  
  constructor(
    private dialogService: DialogService,
  ) { 
      this.sortProducts();
  }

  sortProducts() {
      this.availableProducts.sort((a, b) => a.name.localeCompare(b.name));
      this.selectedProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  dragStart(event: any, product: Product) {
      this.draggedProduct = product;
  }
  
  drop(event: any) {
      if (this.draggedProduct) {
          let existingProduct = this.selectedProducts.find(p => p.id === this.draggedProduct!.id);
          if (existingProduct) {
              existingProduct.quantity = (existingProduct.quantity || 0) + 1;
          } else {
              this.draggedProduct.quantity = 1;
              this.selectedProducts = [...this.selectedProducts, this.draggedProduct];
          }
          let draggedProductIndex = this.findIndex(this.draggedProduct);
          this.availableProducts = this.availableProducts.filter((val, i) => i !== draggedProductIndex);
          this.sortProducts(); // Sort after modifying the list
          this.draggedProduct = null;
          console.log('EXISTING PRODUCT ', existingProduct);
      }
      console.log('DRAGGED PRODUCT ', this.draggedProduct);
      console.log('SELECTED PRODUCT ', this.selectedProducts);
      
  }

  dragEnd(event: any) {
      this.draggedProduct = null;
  }
  
  findIndex(product: Product) {
      return this.availableProducts.findIndex((p) => p.id === product.id);
  }

  removeProduct(product: Product) {
    product.quantity = product.quantity! - 1;
    if (product.quantity! > 0) {
        product.totalPrice = product.price * product.quantity;
    } else {
        // Remove the product entirely if the quantity reaches zero
        this.selectedProducts = this.selectedProducts.filter(p => p.id !== product.id);
    }
      this.sortProducts(); // Sort after modifying the list
  }

  incrementQuantity(product: Product) {
    product.quantity!++;
    product.totalPrice = product.price * product.quantity;  // Update total price
    this.logTotalPrice(product);  // Optional: Log the total price to console
}

  getProductTotalPrice(product: Product): number {
      return product.price * (product.quantity || 0);
  }

  getTotalItems(): number {
      return this.selectedProducts.reduce((acc, product) => acc + (product.quantity || 0), 0);
  }

  getTotalPrice(): number {
      return this.selectedProducts.reduce((acc, product) => acc + this.getProductTotalPrice(product), 0);
  }

  logTotalPrice(product: Product) {
    let totalPrice = product.price * (product.quantity || 0);
    console.log(`Total harga untuk ${product.name}: $${totalPrice}`);
  }

  openLookup() {
    const ref = this.dialogService.open(ProsesDataComponent, {
      header: 'Lookup Data',
      width: '70%',
      data: { selectedRows: this.selectedProducts },
    });

    // Callback yang dipanggil setelah dialog ditutup
    ref.onClose.subscribe((selectedRows: Product[]) => {
      if (selectedRows) {
        // Lakukan sesuatu dengan data yang dipilih setelah dialog ditutup
        console.log(selectedRows);
      }
    });
  }

  cancelSelection() {
    // Mengembalikan produk terpilih ke daftar produk yang tersedia
    this.availableProducts = [...this.availableProducts, ...this.selectedProducts];
    this.sortProducts();  // Jika ada kebutuhan untuk menyortir ulang daftar produk
    this.selectedProducts = [];  // Mengosongkan daftar produk terpilih
}
}