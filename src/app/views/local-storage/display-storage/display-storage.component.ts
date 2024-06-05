import { Component } from '@angular/core';
import { StorageService } from '../../../service/storage.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-storage',
  templateUrl: './display-storage.component.html',
  styleUrls: ['./display-storage.component.scss']
})
export class DisplayStorageComponent {
  title = 'DISPLAY STORAGE';
  userData: any;

  constructor(
    private storageService: StorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userData = this.storageService.load('userData');
  }

  onClick(){
    this.router.navigate(['/localStorage']);
  }

}
