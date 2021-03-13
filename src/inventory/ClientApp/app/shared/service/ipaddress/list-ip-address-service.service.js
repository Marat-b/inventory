System.register(["@angular/core", "./endpoint-list-ipaddress.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, endpoint_list_ipaddress_service_1, ListIpAddressServiceService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (endpoint_list_ipaddress_service_1_1) {
                endpoint_list_ipaddress_service_1 = endpoint_list_ipaddress_service_1_1;
            }
        ],
        execute: function () {
            ListIpAddressServiceService = /** @class */ (function () {
                function ListIpAddressServiceService(listEndpoint) {
                    this.listEndpoint = listEndpoint;
                }
                ListIpAddressServiceService.prototype.getList = function (id) {
                    return this.listEndpoint.getListEndpoint(id);
                };
                ListIpAddressServiceService = __decorate([
                    core_1.Injectable({
                        providedIn: 'root'
                    }),
                    __metadata("design:paramtypes", [endpoint_list_ipaddress_service_1.EndpointListIpaddressService])
                ], ListIpAddressServiceService);
                return ListIpAddressServiceService;
            }());
            exports_1("ListIpAddressServiceService", ListIpAddressServiceService);
        }
    };
});
