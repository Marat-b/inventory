System.register(["@angular/core/testing", "./endpoint-range-ip-address-service.service"], function (exports_1, context_1) {
    "use strict";
    var testing_1, endpoint_range_ip_address_service_service_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (endpoint_range_ip_address_service_service_1_1) {
                endpoint_range_ip_address_service_service_1 = endpoint_range_ip_address_service_service_1_1;
            }
        ],
        execute: function () {
            describe('EndpointRangeIpAddressServiceService', function () {
                beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
                it('should be created', function () {
                    var service = testing_1.TestBed.get(endpoint_range_ip_address_service_service_1.EndpointRangeIpAddressServiceService);
                    expect(service).toBeTruthy();
                });
            });
        }
    };
});
