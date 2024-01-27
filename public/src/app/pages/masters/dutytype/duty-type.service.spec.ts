import { TestBed, inject } from '@angular/core/testing';

import { DutyTypeService } from './duty-type.service';

describe('DutyTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DutyTypeService]
    });
  });

  it('should be created', inject([DutyTypeService], (service: DutyTypeService) => {
    expect(service).toBeTruthy();
  }));
});
