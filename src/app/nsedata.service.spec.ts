import { TestBed } from '@angular/core/testing';

import { NsedataService } from './nsedata.service';

describe('NsedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NsedataService = TestBed.get(NsedataService);
    expect(service).toBeTruthy();
  });
});
