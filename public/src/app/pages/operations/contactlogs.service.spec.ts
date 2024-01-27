import { TestBed, inject } from '@angular/core/testing';

import { ContactlogsService } from './contactlogs.service';

describe('ContactlogsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactlogsService]
    });
  });

  it('should be created', inject([ContactlogsService], (service: ContactlogsService) => {
    expect(service).toBeTruthy();
  }));
});
