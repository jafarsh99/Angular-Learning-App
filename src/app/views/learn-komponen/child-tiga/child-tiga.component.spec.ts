import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTigaComponent } from './child-tiga.component';

describe('ChildTigaComponent', () => {
  let component: ChildTigaComponent;
  let fixture: ComponentFixture<ChildTigaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildTigaComponent]
    });
    fixture = TestBed.createComponent(ChildTigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
