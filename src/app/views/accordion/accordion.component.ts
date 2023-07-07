import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit{

  accordionItems: any[] = [];

  constructor(
    private confirmationService : ConfirmationService,
  ) {

  }

  ngOnInit(): void {
    
    const initialItem = {
      header: 'Accordion Item #' + (this.accordionItems.length + 1),
      content: 'This is the content of Accordion Item #' + (this.accordionItems.length + 1)
    };
    this.accordionItems.push(initialItem);
  }
  
  addAccordionItem() {
    const newItem = {
      header: 'Accordion Item #' + (this.accordionItems.length + 1),
      content: 'This is the content of Accordion Item #' + (this.accordionItems.length + 1)
    };
    this.accordionItems.push(newItem);
  }

  confirmRemoveItem(i: number) {
    this.confirmationService.confirm({
      message: 'Yakin untuk menghapus ?',
      accept: () => {
        this.removeAccordionItem(i)
      }
    })
  }

  removeAccordionItem(index: number) {
  this.accordionItems.splice(index, 1);
  }
}
