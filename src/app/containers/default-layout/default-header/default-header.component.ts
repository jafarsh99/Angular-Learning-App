import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(
    private classToggler: ClassToggleService,
    private router: Router) {
    super();
  }

  logout(): void {
    // Clear the login information from storage
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('username');
    // Redirect to the login page
    this.router.navigate(['/login']);
  }
}
