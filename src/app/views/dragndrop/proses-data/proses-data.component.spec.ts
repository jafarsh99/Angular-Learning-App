import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsesDataComponent } from './proses-data.component';

describe('ProsesDataComponent', () => {
  let component: ProsesDataComponent;
  let fixture: ComponentFixture<ProsesDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProsesDataComponent]
    });
    fixture = TestBed.createComponent(ProsesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
