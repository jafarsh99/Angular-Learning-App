import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-tiga',
  templateUrl: './child-tiga.component.html',
  styleUrls: ['./child-tiga.component.scss']
})
export class ChildTigaComponent {
  @Output() dataEmitter: EventEmitter<string> = new EventEmitter<string>();
  sendData: string = '';

  constructor(){

  }


  sendDataFromChild3(){
    this.dataEmitter.emit(this.sendData);
  }
}
