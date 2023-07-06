import { Component } from '@angular/core';

import { navItems } from './_nav';
import { BtnNavComponent } from 'src/app/views/btn-nav/btn-nav.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent {

  public navItems = navItems;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor() {}
}
