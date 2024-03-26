import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import {Message} from 'primeng//api';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-custom',
  templateUrl: './input-custom.component.html',
  styleUrls: ['./input-custom.component.scss'],
  providers: [MessageService],
})
export class InputCustomComponent implements OnInit {
  value: any;
  selectedValues: any;
  selectedOption: any;
  testModel: string = '';
  ingredient: any;
  msgs1: Message[] = [];

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.msgs1 = [
        {severity:'success', summary:'Success', detail:'Message Content'},
        {severity:'info', summary:'Info', detail:'Message Content'},
        {severity:'warn', summary:'Warning', detail:'Message Content'},
        {severity:'error', summary:'Error', detail:'Message Content'},
        {severity:'custom', summary:'Custom', detail:'Message Content', icon: 'pi-file'}
    ];
}

  myForm = new FormGroup({
    myInput: new FormControl('', [Validators.pattern(/[\/-]/)])
  });

  confirm() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        //Actual logic to perform a confirmation
      },
    });
  }
  confirm2() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action? Lorem Ipsum Dolor Sit Amet Wingardium Leviosa',
      accept: () => {
        //Actual logic to perform a confirmation
      },
    });
  }
  succesToast() {
    this.messageService.add({
      sticky: true,
      severity: 'success',
      summary: 'Service Message',
      detail: 'Via MessageService',
    });
  }
  warnToast() {
    this.messageService.add({
      sticky: true,
      severity: 'warn',
      summary: 'Informasi',
      detail: 'Captcha tidak valid',
    });
  }
  errorToast() {
    this.messageService.add({
      sticky: true,
      severity: 'error',
      summary: 'Informasi',
      detail: 'Captcha tidak valid',
    });
  }
  infoToast() {
    this.messageService.add({
      sticky: true,
      severity: 'info',
      summary: 'Informasi',
      detail: 'Captcha tidak valid',
    });
  }

  options: any[] = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 4', value: 'option4' },
    // ... tambahkan opsi lainnya ...
  ];

  options2: any[] = [
    { label: 'Option 1', value: 'option1', desc: 'testtesttest testtesttest testtesttesttest testtesttesttest testtesttesttest testtesttesttest'  },
    { label: 'Option 2', value: 'option2', desc: 'testtesttest testtesttest testtesttesttest testtesttesttest testtesttesttest testtesttesttest'  },
    { label: 'Option 3', value: 'option3', desc: 'testtesttest testtesttest testtesttesttest testtesttesttest testtesttesttest testtesttesttest'  },
    { label: 'Option 4', value: 'option4', desc: 'testtesttest testtesttest testtesttesttest testtesttesttest testtesttesttest testtesttesttest'  },
    // ... tambahkan opsi lainnya ...
  ];
}
