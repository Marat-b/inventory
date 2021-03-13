System.register(["@angular/core", "@angular/router", "./shared/service/ipaddress/get-range-ipaddress.service", "./shared/service/ipaddress/range-ip-address-service.service", "./app.module"], function (exports_1, context_1) {
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
    var core_1, router_1, get_range_ipaddress_service_1, range_ip_address_service_service_1, app_module_1, AppComponent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (get_range_ipaddress_service_1_1) {
                get_range_ipaddress_service_1 = get_range_ipaddress_service_1_1;
            },
            function (range_ip_address_service_service_1_1) {
                range_ip_address_service_service_1 = range_ip_address_service_service_1_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            }
        ],
        execute: function () {
            AppComponent = /** @class */ (function () {
                //mode:any;
                //$route:Observable<string>;
                function AppComponent(router, rangeService, rangeGetService) {
                    this.router = router;
                    this.rangeService = rangeService;
                    this.rangeGetService = rangeGetService;
                    console.log('getBaseUrl() -> ' + app_module_1.getBaseUrl());
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    /*this.sub= this.rangeService.getRanges().subscribe(s=>{
                      console.log("AppComponent - ngOnInit - s ->"+s);
                      this.rangeIpaddress=s;
                    });*/
                    //this.rangeIpaddress=this.rangeGetService.initRange();
                    //this.mode= new FormControl('side');
                    this.sub = this.rangeGetService.rangeIp$.subscribe(function (res) {
                        _this.rangeIpaddress = res;
                    });
                };
                AppComponent.prototype.ngOnDestroy = function () {
                    this.sub.unsubscribe();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: './inventory.component.html',
                        styleUrls: ['./app.component.scss']
                    }),
                    __metadata("design:paramtypes", [router_1.Router,
                        range_ip_address_service_service_1.RangeIpAddressServiceService,
                        get_range_ipaddress_service_1.GetRangeIpaddressService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    };
});
