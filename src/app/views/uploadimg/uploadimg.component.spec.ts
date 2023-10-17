import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadimgComponent } from './uploadimg.component';

describe('UploadimgComponent', () => {
  let component: UploadimgComponent;
  let fixture: ComponentFixture<UploadimgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadimgComponent]
    });
    fixture = TestBed.createComponent(UploadimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
