import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Html2pdfComponent } from './html2pdf.component';

describe('Html2pdfComponent', () => {
  let component: Html2pdfComponent;
  let fixture: ComponentFixture<Html2pdfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Html2pdfComponent]
    });
    fixture = TestBed.createComponent(Html2pdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
