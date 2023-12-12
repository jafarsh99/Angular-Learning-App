import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDuaComponent } from './child-dua.component';

describe('ChildDuaComponent', () => {
  let component: ChildDuaComponent;
  let fixture: ComponentFixture<ChildDuaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildDuaComponent]
    });
    fixture = TestBed.createComponent(ChildDuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
