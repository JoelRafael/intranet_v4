import { TestBed } from '@angular/core/testing';

import { ClubtableService } from './clubtable.service';

describe('ClubtableService', () => {
  let service: ClubtableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClubtableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
