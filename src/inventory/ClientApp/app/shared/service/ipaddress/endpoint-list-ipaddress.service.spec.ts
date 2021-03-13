import { TestBed } from '@angular/core/testing';

import { EndpointListIpaddressService } from './endpoint-list-ipaddress.service';

describe('EndpointListIpaddressService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EndpointListIpaddressService = TestBed.get(EndpointListIpaddressService);
    expect(service).toBeTruthy();
  });
});
