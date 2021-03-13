System.register(["@angular/core", "./endpoint-range-ip-address-service.service"], function (exports_1, context_1) {
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
    var core_1, endpoint_range_ip_address_service_service_1, RangeIpAddressServiceService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (endpoint_range_ip_address_service_service_1_1) {
                endpoint_range_ip_address_service_service_1 = endpoint_range_ip_address_service_service_1_1;
            }
        ],
        execute: function () {
            RangeIpAddressServiceService = /** @class */ (function () {
                function RangeIpAddressServiceService(rangeEndpoint) {
                    this.rangeEndpoint = rangeEndpoint;
                }
                RangeIpAddressServiceService.prototype.getRanges = function (page, pageSize) {
                    return this.rangeEndpoint.getRangesEndpoint(page, pageSize);
                };
                RangeIpAddressServiceService.prototype.updateRange = function (range) {
                    if (range.rangeId != undefined)
                        return this.rangeEndpoint.getUpdateRangeEndpoint(range, range.rangeId);
                };
                RangeIpAddressServiceService.prototype.newRange = function (range) {
                    return this.rangeEndpoint.getNewRangeEndpoint(range);
                };
                RangeIpAddressServiceService.prototype.deleteRange = function (id) {
                    return this.rangeEndpoint.getDeleteRangeEndpoint(id);
                };
                RangeIpAddressServiceService = __decorate([
                    core_1.Injectable({
                        providedIn: 'root'
                    }),
                    __metadata("design:paramtypes", [endpoint_range_ip_address_service_service_1.EndpointRangeIpAddressServiceService])
                ], RangeIpAddressServiceService);
                return RangeIpAddressServiceService;
            }());
            exports_1("RangeIpAddressServiceService", RangeIpAddressServiceService);
        }
    };
});
