System.register(["@angular/core/testing", "./endpoint-list-ipaddress.service"], function (exports_1, context_1) {
    "use strict";
    var testing_1, endpoint_list_ipaddress_service_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (endpoint_list_ipaddress_service_1_1) {
                endpoint_list_ipaddress_service_1 = endpoint_list_ipaddress_service_1_1;
            }
        ],
        execute: function () {
            describe('EndpointListIpaddressService', function () {
                beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
                it('should be created', function () {
                    var service = testing_1.TestBed.get(endpoint_list_ipaddress_service_1.EndpointListIpaddressService);
                    expect(service).toBeTruthy();
                });
            });
        }
    };
});
