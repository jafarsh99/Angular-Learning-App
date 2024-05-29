import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCSVdataComponent } from './selected-csvdata.component';

describe('SelectedCSVdataComponent', () => {
  let component: SelectedCSVdataComponent;
  let fixture: ComponentFixture<SelectedCSVdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedCSVdataComponent]
    });
    fixture = TestBed.createComponent(SelectedCSVdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
