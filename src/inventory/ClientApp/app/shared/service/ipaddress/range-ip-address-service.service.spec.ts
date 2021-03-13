import { TestBed } from '@angular/core/testing';

import { RangeIpAddressServiceService } from './range-ip-address-service.service';

describe('RangeIpAddressServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RangeIpAddressServiceService = TestBed.get(RangeIpAddressServiceService);
    expect(service).toBeTruthy();
  });
});
