import { Component, ViewChild } from '@angular/core';
import { ChildSatuComponent } from '../child-satu/child-satu.component';
import { ChildDuaComponent } from '../child-dua/child-dua.component';
import { ChildTigaComponent } from '../child-tiga/child-tiga.component';
import { Data } from '../child-tiga/data.interface';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  @ViewChild(ChildSatuComponent)
  komponenChildSatu! : ChildSatuComponent;

  @ViewChild(ChildDuaComponent)
  komponenChildDua! : ChildDuaComponent;

  @ViewChild(ChildTigaComponent)
  komponenChildTiga! : ChildTigaComponent;

  dataFromChild3: string = '';
  selectedDataFromChild2: any;
  selectedData: Data | undefined;
  checkboxSelectedData: Data[] = [];
  
  constructor(){

  }


  receiveDataFromChild3(data: string){
    this.dataFromChild3 = data;
  }

  receiveDataFromChild2(data: any){
    this.selectedDataFromChild2 = data;

    this.komponenChildSatu.child1Form.patchValue({
      selectedName: data.name,
      selectedAge: data.age,
    });
  }

  onDataSelected(selectedData: Data[]) {
    this.selectedData = selectedData[0];
  }

  onCheckboxSelected(checkboxSelectedData: Data[]) {
    this.checkboxSelectedData = checkboxSelectedData;
  }
}
