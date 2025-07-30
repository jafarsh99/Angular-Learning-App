import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-nav',
  templateUrl: './btn-nav.component.html',
  styleUrls: ['./btn-nav.component.scss']
})
export class BtnNavComponent {

  constructor(
    private router: Router
  ){

  }

    //navigate
    goToTable(){
      this.router.navigate(['table']);
    }

    goToDashboard(){
      this.router.navigate(['dashboard']);
    }

    goToAccordion(){
      this.router.navigate(['accordion']);
    }

    goToDarkmode(){
      this.router.navigate(['darkmode']);
    }
    goToCustomPrime(){
      this.router.navigate(['custom-prime']);
    }
    goToUploadImg(){
      this.router.navigate(['upload-img']);
    }
    goToKomponen(){
      this.router.navigate(['parent-child']);
    }
    goToDragNdroP(){
      this.router.navigate(['dragndrop']);
    }
    goToRegex(){
      this.router.navigate(['regex']);
    }
    goToLocalStorage(){
      this.router.navigate(['localStorage']);
    }
    goToLocalStateManagement(){
      this.router.navigate(['state-management']);
    }
    goToHtml2Pdf() {
      this.router.navigate(['html-2-Pdf']);
    }
}
