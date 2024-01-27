import { TestBed, inject } from '@angular/core/testing';

import { DutiesService } from './duties.service';

describe('DutiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DutiesService]
    });
  });

  it('should be created', inject([DutiesService], (service: DutiesService) => {
    expect(service).toBeTruthy();
  }));
});
