System.register(["@angular/core/testing", "./ipaddress/get-range-ipaddress.service"], function (exports_1, context_1) {
    "use strict";
    var testing_1, get_range_ipaddress_service_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (get_range_ipaddress_service_1_1) {
                get_range_ipaddress_service_1 = get_range_ipaddress_service_1_1;
            }
        ],
        execute: function () {
            describe('GetRangeIpaddressService', function () {
                beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
                it('should be created', function () {
                    var service = testing_1.TestBed.get(get_range_ipaddress_service_1.GetRangeIpaddressService);
                    expect(service).toBeTruthy();
                });
            });
        }
    };
});
