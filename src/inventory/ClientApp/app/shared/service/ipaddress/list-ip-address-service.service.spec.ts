import { TestBed } from '@angular/core/testing';

import { ListIpAddressServiceService } from './list-ip-address-service.service';

describe('ListIpAddressServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListIpAddressServiceService = TestBed.get(ListIpAddressServiceService);
    expect(service).toBeTruthy();
  });
});
