import { TestBed } from '@angular/core/testing';

import { ParentService } from './komponen.service';

describe('ParentService', () => {
  let service: ParentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
