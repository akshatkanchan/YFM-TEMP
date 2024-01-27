import { TestBed, inject } from '@angular/core/testing';

import { NewBranchService } from './new-branch.service';

describe('NewBranchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewBranchService]
    });
  });

  it('should be created', inject([NewBranchService], (service: NewBranchService) => {
    expect(service).toBeTruthy();
  }));
});
