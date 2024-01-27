import { TestBed, inject } from '@angular/core/testing';

import { AdvancepaymentService } from './advancepayment.service';

describe('AdvancepaymentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvancepaymentService]
    });
  });

  it('should be created', inject([AdvancepaymentService], (service: AdvancepaymentService) => {
    expect(service).toBeTruthy();
  }));
});
