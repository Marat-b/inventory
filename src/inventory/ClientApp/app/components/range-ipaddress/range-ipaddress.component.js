System.register(["@angular/core", "@angular/material", "@angular/forms", "../../shared/service/ipaddress/get-range-ipaddress.service", "../../shared/service/ipaddress/range-ip-address-service.service"], function (exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, material_1, forms_1, get_range_ipaddress_service_1, range_ip_address_service_service_1, RangeIpaddressComponent, RangeIpaddressDialogComponent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (material_1_1) {
                material_1 = material_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (get_range_ipaddress_service_1_1) {
                get_range_ipaddress_service_1 = get_range_ipaddress_service_1_1;
            },
            function (range_ip_address_service_service_1_1) {
                range_ip_address_service_service_1 = range_ip_address_service_service_1_1;
            }
        ],
        execute: function () {
            RangeIpaddressComponent = /** @class */ (function () {
                function RangeIpaddressComponent(ipRangeDialog, snackBar, rangeGetService, rangeService) {
                    this.ipRangeDialog = ipRangeDialog;
                    this.snackBar = snackBar;
                    this.rangeGetService = rangeGetService;
                    this.rangeService = rangeService;
                    this.dataSource = new material_1.MatTableDataSource();
                }
                RangeIpaddressComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //this.dataSource.data=[{'rangeId':1, 'startIpaddress':'1','endIpaddress':'2'},{'rangeId':2,'startIpaddress':'3','endIpaddress':'4'}]
                    this.sub = this.rangeService.getRanges().subscribe(function (results) {
                        _this.dataSource.data = results;
                    });
                };
                RangeIpaddressComponent.prototype.ngOnDestroy = function () {
                    this.sub.unsubscribe();
                };
                RangeIpaddressComponent.prototype.ngAfterViewInit = function () {
                    this.dataSource.sort = this.sort;
                    this.dataSource.paginator = this.paginator;
                };
                RangeIpaddressComponent.prototype.editIpaddress = function (id) {
                    var _this = this;
                    console.log('RangeID=' + id);
                    if (id != undefined) {
                        this.rangeIp = this.dataSource.data.filter(function (f) { return f.rangeId == id; }).shift();
                        console.log('Start IP address = ' + this.rangeIp.startAddress);
                    }
                    else {
                        this.rangeIp = new /** @class */ (function () {
                            function class_1() {
                            }
                            return class_1;
                        }());
                    }
                    var dialogRef = this.ipRangeDialog.open(RangeIpaddressDialogComponent, {
                        panelClass: 'mat-dialog-sd',
                        data: { rangeIp: this.rangeIp }
                    });
                    dialogRef.afterClosed().subscribe(function (s) {
                        console.log(s);
                        if (s != undefined) {
                            console.log('startAddress ->' + s.value.startAddress);
                            console.log('rangeId ->' + s.value.rangeId);
                            /*this.rangeIp.startAddress = s.value.startAddress;
                            this.rangeIp.endAddress = s.value.endAddress;
                            if (id == undefined) {
                              this.dataSource.data.push({
                                rangeId: 0,
                                startAddress: s.value.startAddress,
                                endAddress: s.value.endAddress
                              });
                              this.dataSource.filter=this.dataSource.filter;
                            }*/
                            _this.Save(id, s.value.startAddress, s.value.endAddress);
                            /*this.dataSource.filter=this.dataSource.filter;
                            this.rangeGetService.makeRange(this.dataSource.data);*/
                        }
                    });
                };
                RangeIpaddressComponent.prototype.Save = function (id, startAddress, endAddress) {
                    var _this = this;
                    var range = new /** @class */ (function () {
                        function class_2() {
                        }
                        return class_2;
                    }());
                    if (id == undefined)
                        range.rangeId = 0;
                    else
                        range.rangeId = id;
                    range.startAddress = startAddress;
                    range.endAddress = endAddress;
                    if (range.rangeId > 0) {
                        this.rangeService.updateRange(range).subscribe(function (res) {
                            _this.dataSource.data = _this.dataSource.data.map(function (m) {
                                console.log('m - >' + m.rangeId.toString() + ' ' + m.startAddress.toString());
                                if (m.rangeId == range.rangeId)
                                    return { rangeId: m.rangeId, startAddress: range.startAddress, endAddress: range.endAddress };
                                else
                                    return m;
                            });
                            //this.dataSource.filter=this.dataSource.filter;
                            //this.dataSource.data=this.dataSource.data.filter(item=>{item===range});
                            _this.rangeGetService.makeRange(_this.dataSource.data);
                        });
                    }
                    else {
                        this.rangeService.newRange(range).subscribe(function (res) {
                            _this.dataSource.data.push(res);
                            _this.dataSource.filter = _this.dataSource.filter;
                            //this.dataSource.data=this.dataSource.data.filter(item=>{item===item});
                            _this.rangeGetService.makeRange(_this.dataSource.data);
                        });
                    }
                };
                RangeIpaddressComponent.prototype.deleteIpaddress = function (range) {
                    var _this = this;
                    this.snackBar.open("\u0423\u0434\u0430\u043B\u0438\u0442\u044C " + range.startAddress + " - " + range.endAddress + " ?", 'Удалить', { duration: 10000 }).onAction().subscribe(function () {
                        _this.rangeService.deleteRange(range.rangeId).subscribe(function (results) {
                            _this.dataSource.data = _this.dataSource.data.filter(function (item) { return item !== range; });
                            _this.rangeGetService.makeRange(_this.dataSource.data);
                        });
                    });
                };
                RangeIpaddressComponent.prototype.doFilter = function (filterValue) {
                    this.dataSource.filter = filterValue.trim().toLowerCase();
                };
                __decorate([
                    core_1.ViewChild(material_1.MatSort),
                    __metadata("design:type", material_1.MatSort)
                ], RangeIpaddressComponent.prototype, "sort", void 0);
                __decorate([
                    core_1.ViewChild(material_1.MatPaginator),
                    __metadata("design:type", material_1.MatPaginator)
                ], RangeIpaddressComponent.prototype, "paginator", void 0);
                RangeIpaddressComponent = __decorate([
                    core_1.Component({
                        selector: 'app-range-ipaddress',
                        templateUrl: './range-ipaddress.component.html',
                        styleUrls: ['./range-ipaddress.component.scss']
                    }),
                    __metadata("design:paramtypes", [material_1.MatDialog,
                        material_1.MatSnackBar,
                        get_range_ipaddress_service_1.GetRangeIpaddressService,
                        range_ip_address_service_service_1.RangeIpAddressServiceService])
                ], RangeIpaddressComponent);
                return RangeIpaddressComponent;
            }());
            exports_1("RangeIpaddressComponent", RangeIpaddressComponent);
            RangeIpaddressDialogComponent = /** @class */ (function () {
                function RangeIpaddressDialogComponent(formBuilder, dialogRef, data) {
                    this.formBuilder = formBuilder;
                    this.dialogRef = dialogRef;
                    this.data = data;
                    //this.rangeIp=this.data.rangeIp;
                    this.rangeForm = formBuilder.group({
                        startAddress: this.data.rangeIp.startAddress,
                        endAddress: this.data.rangeIp.endAddress
                    });
                    /*this.rangeForm.reset({
                      startIpaddress: this.rangeIp.startIpaddress || '',
                      endIpaddress: this.rangeIp.endIpaddress || ''
                    });*/
                }
                /*ngOnChanges(): void {
                  this.rangeForm.reset({
                    startIpipaddress:'6',
                    endIpaddress:'7'
                  });
              
                  this.rangeIp.startIpaddress='8';
                }*/
                RangeIpaddressDialogComponent.prototype.cancel = function () {
                    this.dialogRef.close(null);
                };
                RangeIpaddressDialogComponent = __decorate([
                    core_1.Component({
                        selector: 'app-iprange-dialog',
                        templateUrl: './range-ipaddress-dialog.component.html'
                    }),
                    __param(2, core_1.Inject(material_1.MAT_DIALOG_DATA)),
                    __metadata("design:paramtypes", [forms_1.FormBuilder,
                        material_1.MatDialogRef, Object])
                ], RangeIpaddressDialogComponent);
                return RangeIpaddressDialogComponent;
            }());
            exports_1("RangeIpaddressDialogComponent", RangeIpaddressDialogComponent) /*implements OnChanges*/;
        }
    };
});
