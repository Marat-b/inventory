System.register(["@angular/core", "../../shared/service/monitor/monitor.service", "@angular/material"], function (exports_1, context_1) {
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
    var core_1, monitor_service_1, material_1, MonitorPaginationComponent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (monitor_service_1_1) {
                monitor_service_1 = monitor_service_1_1;
            },
            function (material_1_1) {
                material_1 = material_1_1;
            }
        ],
        execute: function () {
            MonitorPaginationComponent = /** @class */ (function () {
                /////   Constructor \\\\\\\\\
                function MonitorPaginationComponent(monitorService) {
                    this.monitorService = monitorService;
                    this.page = 1;
                    this.displayedColumns = ['monitorId', 'model', 'serialNumber', 'computerName', 'lastUpdate'];
                    /*this.monitorModel=[];
                    this.pageSize=15;
                    this.currentPage=1;*/
                    this.dataSource = new material_1.MatTableDataSource();
                }
                //// Инициализация при старте страницы
                MonitorPaginationComponent.prototype.ngOnInit = function () {
                    //this.monitorModel=this.monitorService.getData();
                    this.buildForm();
                };
                MonitorPaginationComponent.prototype.ngAfterViewInit = function () {
                    this.dataSource.sort = this.sort;
                    this.dataSource.paginator = this.paginator;
                };
                MonitorPaginationComponent.prototype.doFilter = function (filterValue) {
                    this.dataSource.filter = filterValue.trim().toLowerCase();
                };
                MonitorPaginationComponent.prototype.refresh = function () {
                    this.buildForm();
                };
                MonitorPaginationComponent.prototype.buildForm = function () {
                    var _this = this;
                    this.monitorService.getData().subscribe(function (t) {
                        //this.monitorModel = t.map(m => m);
                        _this.dataSource.data = t;
                    });
                };
                __decorate([
                    core_1.ViewChild(material_1.MatSort),
                    __metadata("design:type", material_1.MatSort)
                ], MonitorPaginationComponent.prototype, "sort", void 0);
                __decorate([
                    core_1.ViewChild(material_1.MatPaginator),
                    __metadata("design:type", material_1.MatPaginator)
                ], MonitorPaginationComponent.prototype, "paginator", void 0);
                MonitorPaginationComponent = __decorate([
                    core_1.Component({
                        selector: 'monitor-pagination',
                        templateUrl: 'monitor.html' //./app/components/monitor/
                    }),
                    __metadata("design:paramtypes", [monitor_service_1.MonitorService])
                ], MonitorPaginationComponent);
                return MonitorPaginationComponent;
            }());
            exports_1("MonitorPaginationComponent", MonitorPaginationComponent);
        }
    };
});
