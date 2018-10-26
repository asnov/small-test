import { TestBed } from '@angular/core/testing';

import { EtherTestLibService } from './ether-test-lib.service';

describe('EtherTestLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EtherTestLibService = TestBed.get(EtherTestLibService);
    expect(service).toBeTruthy();
  });
});
