import { TestBed } from '@angular/core/testing';

import { FICHEEVALCOMPService } from './ficheevalcomp.service';

describe('FICHEEVALCOMPService', () => {
  let service: FICHEEVALCOMPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FICHEEVALCOMPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
