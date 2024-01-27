import { TestBed, inject } from '@angular/core/testing';

import { SubUserService } from './sub-user.service';

describe('SubUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubUserService]
    });
  });

  it('should be created', inject([SubUserService], (service: SubUserService) => {
    expect(service).toBeTruthy();
  }));
});
