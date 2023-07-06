import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';

import { DashboardChartsData, IChartProps } from './dashboard-charts-data';
import { Router } from '@angular/router';

interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  slides: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });
  items = [1, 2, 3, 4];
  accordionItems: any[] = [];
  myForm!: FormGroup;
  formSubmitted = false;
  submittedItems: { name: string; description: string }[] = [];
  visibleModal = false;

  username: any;
  password: any;
  private sessionTimeOut: any;

  constructor(
    private chartsData: DashboardChartsData,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.slides[0] = {
      src: './assets/img/angular.jpg',
    };
    this.slides[1] = {
      src: './assets/img/react.jpg',
    };
    this.slides[2] = {
      src: './assets/img/vue.jpg',
    };

    const initialItem = {
      visible: true,
    };
    this.accordionItems.push(initialItem);

    this.myForm = this.formBuilder.group({
      itemsArr: this.formBuilder.array([]),
    });
    this.addItem(); // Add an initial item

    this.cekLogin();
  }

  cekLogin() {
    // Periksa apakah pengguna sudah login
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      // Jika tidak, arahkan ke halaman login
      this.router.navigate(['/login']);
    } else {
      // Jika sudah, dapatkan username dari storage
      this.username = sessionStorage.getItem('username');
      // Set session timeout to 5 minutes (adjust as needed)
      // this.sessionTimeOut = setTimeout(() => {
      //   this.logout();
      // }, 5 * 60 * 1000); // 5 minutes in milliseconds
    }
  }

  addAccordionItem() {
    const newItem = {
      visible: false,
    };
    this.accordionItems.push(newItem);
  }

  removeAccordionItem() {
    this.accordionItems.pop();
  }

  toggleItem(item: any) {
    item.visible = !item.visible;
  }

  // FORM ARRAY
  get itemsArr(): FormArray {
    return this.myForm.get('itemsArr') as FormArray;
  }

  addItem(): void {
    const itemFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.itemsArr.push(itemFormGroup);
  }

  removeItem(index: number): void {
    this.itemsArr.removeAt(index);
  }

  submitForm(): void {
    if (this.myForm.valid) {
      this.formSubmitted = true;
      this.submittedItems = this.itemsArr.value;
    } else {
      console.log('Form is invalid');
    }
  }

  //MODAL
  toggleLiveDemo() {
    this.visibleModal = !this.visibleModal;
  }

  handleLiveDemoChange(event: any) {
    this.visibleModal = event;
  }

  logout(): void {
    // Clear the login information from sessionStorage
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('username');

    // Redirect to the login page
    this.router.navigate(['/login']);
  }

}
