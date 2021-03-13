System.register(["@angular/core/testing", "./range-ip-address-service.service"], function (exports_1, context_1) {
    "use strict";
    var testing_1, range_ip_address_service_service_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (range_ip_address_service_service_1_1) {
                range_ip_address_service_service_1 = range_ip_address_service_service_1_1;
            }
        ],
        execute: function () {
            describe('RangeIpAddressServiceService', function () {
                beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
                it('should be created', function () {
                    var service = testing_1.TestBed.get(range_ip_address_service_service_1.RangeIpAddressServiceService);
                    expect(service).toBeTruthy();
                });
            });
        }
    };
});
