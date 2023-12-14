import { EventEmitter, Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // map yang digunakan untuk simpan data sementara di mencatat spp
  private paramStore = new Map<string, any>();
  // event emitter digunakan saat pindah dari child form ke parent
  public resume = new EventEmitter<any>();
  public resume2 = new EventEmitter<{ key: string, data: any }>();
  constructor(private location: Location) {}

  getParam(key: string) {
    return this.paramStore.get(key);
  }

  setParam(key: string, value: any) {
    this.paramStore.set(key, value);
  }

  hasParam(key: string) {
    return this.paramStore.has(key);
  }

  setResumeData(key: string, data: any) {
    this.resume.emit({ key, data });
  }

  // method untuk balik ke url parent
  back() {
    this.location.back();
  }

  clearParam() {
    this.paramStore.clear();
  }

  deleteParam(key: string) {
    this.paramStore.delete(key);
  }
}
