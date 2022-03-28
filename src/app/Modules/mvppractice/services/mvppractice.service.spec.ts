import { TestBed } from '@angular/core/testing';

import { MvppracticeService } from './mvppractice.service';

describe('MvppracticeService', () => {
  let service: MvppracticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MvppracticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
