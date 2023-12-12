import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSatuComponent } from './child-satu.component';

describe('ChildSatuComponent', () => {
  let component: ChildSatuComponent;
  let fixture: ComponentFixture<ChildSatuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildSatuComponent]
    });
    fixture = TestBed.createComponent(ChildSatuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
