import { TestBed, inject } from '@angular/core/testing';

import { CompanyprofileService } from './companyprofile.service';

describe('CompanyprofileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyprofileService]
    });
  });

  it('should be created', inject([CompanyprofileService], (service: CompanyprofileService) => {
    expect(service).toBeTruthy();
  }));
});
