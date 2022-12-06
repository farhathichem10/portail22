import { TestBed } from '@angular/core/testing';

import { EvalempService } from './evalemp.service';

describe('EvalempService', () => {
  let service: EvalempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvalempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
