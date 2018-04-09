import { TestBed, inject } from '@angular/core/testing';

import { ConspectService } from './conspect.service';

describe('ConspectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConspectService]
    });
  });

  it('should be created', inject([ConspectService], (service: ConspectService) => {
    expect(service).toBeTruthy();
  }));
});
