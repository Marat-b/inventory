System.register(["@angular/core", "../endpoint-factory.service", "@angular/common/http", "rxjs/operators"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        }
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, endpoint_factory_service_1, http_1, operators_1, EndpointRangeIpAddressServiceService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (endpoint_factory_service_1_1) {
                endpoint_factory_service_1 = endpoint_factory_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (operators_1_1) {
                operators_1 = operators_1_1;
            }
        ],
        execute: function () {
            EndpointRangeIpAddressServiceService = /** @class */ (function (_super) {
                __extends(EndpointRangeIpAddressServiceService, _super);
                function EndpointRangeIpAddressServiceService(http, injector) {
                    var _this = _super.call(this, http, injector) || this;
                    _this._rangesUrl = 'api/rangeAddress/ranges';
                    _this._rangeUrl = 'api/rangeAddress/range';
                    return _this;
                }
                Object.defineProperty(EndpointRangeIpAddressServiceService.prototype, "rangesUrl", {
                    get: function () { return this._rangesUrl; },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(EndpointRangeIpAddressServiceService.prototype, "rangeUrl", {
                    get: function () { return this._rangeUrl; },
                    enumerable: true,
                    configurable: true
                });
                ;
                EndpointRangeIpAddressServiceService.prototype.getRangesEndpoint = function (page, pageSize) {
                    var _this = this;
                    var endpointUrl = page && pageSize ? this.rangesUrl + "/" + page + "/" + pageSize : this.rangesUrl;
                    console.log("endpointUrl=" + endpointUrl);
                    return this.http.get(endpointUrl, this.getRequestHeaders()).pipe(operators_1.catchError(function (error) {
                        return _this.handleError(error, function () { return _this.getRangesEndpoint(page, pageSize); });
                    }));
                };
                EndpointRangeIpAddressServiceService.prototype.getUpdateRangeEndpoint = function (rangeObject, rangeId) {
                    var _this = this;
                    var endpointUrl = this.rangeUrl + "/" + rangeId;
                    console.log("getUpdateRangeEndpoint -- endpointUrl=" + endpointUrl);
                    console.log("getUpdateRangeEndpoint -- loyaltyObject=" + JSON.stringify(rangeObject));
                    return this.http.put(endpointUrl, JSON.stringify(rangeObject), this.getRequestHeaders())
                        .pipe(operators_1.catchError(function (error) { return _this.handleError(error, function () { return _this.getUpdateRangeEndpoint(rangeObject, rangeId); }); }));
                };
                EndpointRangeIpAddressServiceService.prototype.getRangeEndpoint = function (rangeId) {
                    var _this = this;
                    var endpointUrl = this.rangeUrl + "/" + rangeId;
                    return this.http.get(endpointUrl, this.getRequestHeaders()).pipe(operators_1.catchError(function (error) {
                        return _this.handleError(error, function () { return _this.getRangeEndpoint(rangeId); });
                    }));
                };
                EndpointRangeIpAddressServiceService.prototype.getNewRangeEndpoint = function (rangeObject) {
                    var _this = this;
                    var endpointUrl = "" + this.rangeUrl;
                    console.log("getNewRangeEndpoint -- endpointUrl=" + endpointUrl);
                    console.log("getNewRangeEndpoint -- rangeObject=" + JSON.stringify(rangeObject));
                    return this.http.post(endpointUrl, JSON.stringify(rangeObject), this.getRequestHeaders())
                        .pipe(operators_1.catchError(function (error) { return _this.handleError(error, function () { return _this.getNewRangeEndpoint(rangeObject); }); }));
                };
                EndpointRangeIpAddressServiceService.prototype.getDeleteRangeEndpoint = function (rangeId) {
                    var _this = this;
                    var endpointUrl = this.rangeUrl + "/" + rangeId;
                    return this.http.delete(endpointUrl, this.getRequestHeaders()).pipe(operators_1.catchError(function (error) {
                        return _this.handleError(error, function () { return _this.getDeleteRangeEndpoint(rangeId); });
                    }));
                };
                EndpointRangeIpAddressServiceService = __decorate([
                    core_1.Injectable({
                        providedIn: 'root'
                    }),
                    __metadata("design:paramtypes", [http_1.HttpClient, core_1.Injector])
                ], EndpointRangeIpAddressServiceService);
                return EndpointRangeIpAddressServiceService;
            }(endpoint_factory_service_1.EndpointFactory));
            exports_1("EndpointRangeIpAddressServiceService", EndpointRangeIpAddressServiceService);
        }
    };
});
