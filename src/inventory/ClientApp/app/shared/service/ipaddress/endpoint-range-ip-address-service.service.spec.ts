import { TestBed } from '@angular/core/testing';

import { EndpointRangeIpAddressServiceService } from './endpoint-range-ip-address-service.service';

describe('EndpointRangeIpAddressServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EndpointRangeIpAddressServiceService = TestBed.get(EndpointRangeIpAddressServiceService);
    expect(service).toBeTruthy();
  });
});
