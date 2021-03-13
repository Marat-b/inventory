import { TestBed } from '@angular/core/testing';

import { GetRangeIpaddressService } from './ipaddress/get-range-ipaddress.service';

describe('GetRangeIpaddressService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetRangeIpaddressService = TestBed.get(GetRangeIpaddressService);
    expect(service).toBeTruthy();
  });
});
