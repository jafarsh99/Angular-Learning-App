import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateManagementExmComponent } from './state-management-exm.component';

describe('StateManagementExmComponent', () => {
  let component: StateManagementExmComponent;
  let fixture: ComponentFixture<StateManagementExmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StateManagementExmComponent]
    });
    fixture = TestBed.createComponent(StateManagementExmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
