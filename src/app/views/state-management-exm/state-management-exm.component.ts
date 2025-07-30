import { Component, computed, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-state-management-exm',
  templateUrl: './state-management-exm.component.html',
  styleUrls: ['./state-management-exm.component.scss']
})
export class StateManagementExmComponent implements OnInit {
  // Initialize a signal with an object containing person's firstName, lastName, and id
  title = "State Management Example with Signals";
  person = signal({ firstName: "Paul", lastName: "Posey", id: 12 });

  displayName: any;

  ngOnInit(): void {
    // Compute the full name by deriving from the person's state
    this.displayName = computed(() => {
      return this.person().lastName + ", " + this.person().firstName;
    });
  }


  // Method to update the signal's state
  changeName() {
    this.person.set({ firstName: "John", lastName: "Doe", id: 13 });
  }
}