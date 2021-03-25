import { TestBed } from '@angular/core/testing';

import { CluballService } from './cluball.service';

describe('CluballService', () => {
  let service: CluballService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CluballService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
