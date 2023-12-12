import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupDataComponent } from './lookup-data.component';

describe('LookupDataComponent', () => {
  let component: LookupDataComponent;
  let fixture: ComponentFixture<LookupDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LookupDataComponent]
    });
    fixture = TestBed.createComponent(LookupDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
