import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import {Message} from 'primeng//api';

@Component({
  selector: 'app-input-custom',
  templateUrl: './input-custom.component.html',
  styleUrls: ['./input-custom.component.scss'],
  providers: [MessageService],
})
export class InputCustomComponent {
  value: any;
  selectedValues: any;
  selectedOption: any;

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  confirm() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        //Actual logic to perform a confirmation
      },
    });
  }
  succesToast() {
    this.messageService.add({
      severity: 'success',
      summary: 'Service Message',
      detail: 'Via MessageService',
    });
  }
  errorToast() {
    this.messageService.add({
      sticky: true,
      severity: 'error',
      summary: 'Service Message',
      detail: 'Via MessageService',
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
