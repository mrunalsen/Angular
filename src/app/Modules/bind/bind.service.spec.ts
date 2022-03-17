import { TestBed } from '@angular/core/testing';

import { BindService } from './bind.service';

describe('BindService', () => {
  let service: BindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
