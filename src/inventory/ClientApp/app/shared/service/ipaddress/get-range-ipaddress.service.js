System.register(["@angular/core", "./range-ip-address-service.service", "rxjs"], function (exports_1, context_1) {
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
    var core_1, range_ip_address_service_service_1, rxjs_1, GetRangeIpaddressService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (range_ip_address_service_service_1_1) {
                range_ip_address_service_service_1 = range_ip_address_service_service_1_1;
            },
            function (rxjs_1_1) {
                rxjs_1 = rxjs_1_1;
            }
        ],
        execute: function () {
            GetRangeIpaddressService = /** @class */ (function () {
                function GetRangeIpaddressService(rangeService) {
                    var _this = this;
                    this.rangeService = rangeService;
                    this.onRangeIp = new rxjs_1.Subject();
                    this.rangeIp$ = this.onRangeIp.asObservable();
                    //this.range=new EventEmitter<IRangeIpaddressModel[]>();
                    this.sub = this.rangeService.getRanges().subscribe(function (results) {
                        //this.rangeIp=results;
                        _this.onRangeIp.next(results);
                    });
                }
                GetRangeIpaddressService.prototype.makeRange = function (range) {
                    console.log('makeRange ->' + JSON.stringify(range));
                    //this.range.emit(range);
                    this.onRangeIp.next(range);
                };
                /*public initRange():IRangeIpaddressModel[] {
                  /!*this.rangeIp=[{
                    rangeId:3,
                    startIpaddress:'1.1..1.1.11.',
                    endIpaddress:'2.2.2..22.2.'
                  }];*!/
                  console.log('initRange rangeIp->'+this.rangeIp);
                  return this.rangeIp;
                }*/
                GetRangeIpaddressService.prototype.ngOnDestroy = function () {
                    this.sub.unsubscribe();
                };
                GetRangeIpaddressService = __decorate([
                    core_1.Injectable({
                        providedIn: 'root'
                    }),
                    __metadata("design:paramtypes", [range_ip_address_service_service_1.RangeIpAddressServiceService])
                ], GetRangeIpaddressService);
                return GetRangeIpaddressService;
            }());
            exports_1("GetRangeIpaddressService", GetRangeIpaddressService);
        }
    };
});
