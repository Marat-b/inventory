System.register(["@angular/core", "@angular/router", "@angular/material", "../../shared/service/ipaddress/list-ip-address-service.service"], function (exports_1, context_1) {
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
    var core_1, router_1, material_1, list_ip_address_service_service_1, ListIpaddressComponent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (material_1_1) {
                material_1 = material_1_1;
            },
            function (list_ip_address_service_service_1_1) {
                list_ip_address_service_service_1 = list_ip_address_service_service_1_1;
            }
        ],
        execute: function () {
            ListIpaddressComponent = /** @class */ (function () {
                function ListIpaddressComponent(route, listAddress) {
                    this.route = route;
                    this.listAddress = listAddress;
                    this.displayedColumns = ['ipAddress', 'deviceName', 'macAddress', 'lastUpdate'];
                    this.dataSource = new material_1.MatTableDataSource();
                }
                ListIpaddressComponent.prototype.ngOnInit = function () {
                    this.refreshing();
                };
                ListIpaddressComponent.prototype.ngAfterViewInit = function () {
                    this.dataSource.sort = this.sort;
                    this.dataSource.paginator = this.paginator;
                };
                ListIpaddressComponent.prototype.doFilter = function (filterValue) {
                    this.dataSource.filter = filterValue.trim().toLowerCase();
                };
                ListIpaddressComponent.prototype.refresh = function () {
                    this.refreshing();
                };
                ListIpaddressComponent.prototype.refreshing = function () {
                    var _this = this;
                    this.sub = this.route.params.subscribe(function (params) {
                        console.log('params ->' + params['rangeId']);
                        _this.selectedId = params['rangeId'];
                        _this.listAddress.getList(params['rangeId']).subscribe(function (res) {
                            _this.dataSource.data = res;
                        });
                    });
                };
                ListIpaddressComponent.prototype.ngOnDestroy = function () {
                    this.sub.unsubscribe();
                };
                __decorate([
                    core_1.ViewChild(material_1.MatSort),
                    __metadata("design:type", material_1.MatSort)
                ], ListIpaddressComponent.prototype, "sort", void 0);
                __decorate([
                    core_1.ViewChild(material_1.MatPaginator),
                    __metadata("design:type", material_1.MatPaginator)
                ], ListIpaddressComponent.prototype, "paginator", void 0);
                ListIpaddressComponent = __decorate([
                    core_1.Component({
                        selector: 'app-list-ipaddress',
                        templateUrl: './list-ipaddress.component.html',
                        styleUrls: ['./list-ipaddress.component.scss']
                    }),
                    __metadata("design:paramtypes", [router_1.ActivatedRoute,
                        list_ip_address_service_service_1.ListIpAddressServiceService])
                ], ListIpaddressComponent);
                return ListIpaddressComponent;
            }());
            exports_1("ListIpaddressComponent", ListIpaddressComponent);
        }
    };
});
