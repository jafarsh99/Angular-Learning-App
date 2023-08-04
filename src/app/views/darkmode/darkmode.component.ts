import { Component } from '@angular/core';

@Component({
  selector: 'app-darkmode',
  templateUrl: './darkmode.component.html',
  styleUrls: ['./darkmode.component.scss']
})
export class DarkmodeComponent {

  selectedMode: string = 'light';
  modes: any[] = [
    { label: 'Dark', value: 'dark' },
    { label: 'Light', value: 'light' }
  ];

}
