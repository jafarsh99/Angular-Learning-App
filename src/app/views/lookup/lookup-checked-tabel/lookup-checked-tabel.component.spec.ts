import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupCheckedTabelComponent } from './lookup-checked-tabel.component';

describe('LookupCheckedTabelComponent', () => {
  let component: LookupCheckedTabelComponent;
  let fixture: ComponentFixture<LookupCheckedTabelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LookupCheckedTabelComponent]
    });
    fixture = TestBed.createComponent(LookupCheckedTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
