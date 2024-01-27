import { TestBed, inject } from '@angular/core/testing';

import { VisaService } from './visa.service';

describe('VisaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisaService]
    });
  });

  it('should be created', inject([VisaService], (service: VisaService) => {
    expect(service).toBeTruthy();
  }));
});
