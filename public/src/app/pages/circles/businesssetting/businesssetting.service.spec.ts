import { TestBed, inject } from '@angular/core/testing';

import { BusinesssettingService } from './businesssetting.service';

describe('BusinesssettingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusinesssettingService]
    });
  });

  it('should be created', inject([BusinesssettingService], (service: BusinesssettingService) => {
    expect(service).toBeTruthy();
  }));
});
