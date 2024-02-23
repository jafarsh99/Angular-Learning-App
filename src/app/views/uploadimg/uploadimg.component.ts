import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-uploadimg',
  templateUrl: './uploadimg.component.html',
  styleUrls: ['./uploadimg.component.scss'],
  providers: [MessageService]
})
export class UploadimgComponent {
  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) {}

  onUpload(event: any) {
    for (const file of event.files) {
      // file.url = URL.createObjectURL(file);
      this.uploadedFiles.push(file);
      
    }
    console.log('FILE : ', this.uploadedFiles);

    this.messageService.add({
      severity: 'info',
      summary: 'File Uploaded',
      detail: '',
    });
  }

}
