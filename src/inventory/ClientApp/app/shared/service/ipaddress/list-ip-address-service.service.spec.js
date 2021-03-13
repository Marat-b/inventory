System.register(["@angular/core/testing", "./list-ip-address-service.service"], function (exports_1, context_1) {
    "use strict";
    var testing_1, list_ip_address_service_service_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (list_ip_address_service_service_1_1) {
                list_ip_address_service_service_1 = list_ip_address_service_service_1_1;
            }
        ],
        execute: function () {
            describe('ListIpAddressServiceService', function () {
                beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
                it('should be created', function () {
                    var service = testing_1.TestBed.get(list_ip_address_service_service_1.ListIpAddressServiceService);
                    expect(service).toBeTruthy();
                });
            });
        }
    };
});
