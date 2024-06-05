import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../service/storage.service'

@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.scss']
})
export class LocalStorageComponent {

  title = 'LOCAL STORAGE';
  userData = { 
    name: '',
    address: '',
    food: '' 
  };

  constructor(
    private storageService: StorageService, 
    private router: Router
  ) {}
  
  ngOnInit() {

  }

  onSubmit(): void {
    this.storageService.save('userData', this.userData);
    this.router.navigate(['/displayStorage']);
  }

}
