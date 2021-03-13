System.register(["@angular/core", "../../shared/service/computer/computer.service", "../../shared/service/service/service.service", "../../shared/service/product/product.service", "../../shared/service/printer/printer.service", "@angular/material"], function (exports_1, context_1) {
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
    var core_1, computer_service_1, service_service_1, product_service_1, printer_service_1, material_1, ComputerModalContent, ServiceModalContent, PrinterModalContent, ComputerPaginationComponent, ProductModalContent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (computer_service_1_1) {
                computer_service_1 = computer_service_1_1;
            },
            function (service_service_1_1) {
                service_service_1 = service_service_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (printer_service_1_1) {
                printer_service_1 = printer_service_1_1;
            },
            function (material_1_1) {
                material_1 = material_1_1;
            }
        ],
        execute: function () {
            ComputerModalContent = /** @class */ (function () {
                function ComputerModalContent(dialogRef, computerService, data) {
                    this.dialogRef = dialogRef;
                    this.computerService = computerService;
                    this.data = data;
                    this.dataColumns = ['computerName', 'serialNumber', 'bios', 'model', 'operatingSystem', 'physicalMemory', 'processor', 'diskDrive', 'videoController',
                        'serialPort', 'networkAdapter', 'cdromDrive', 'soundDevice', 'parallelPort', 'userName', 'userAccount', 'share',
                        'logicalDisk', 'ipAddress', 'macAddress', 'bootupTime', 'lastUpdate'];
                    this.displayedColumns = [];
                    this.labels = ['Имя компьютера', 'Серийный номер', 'BIOS', 'Модель', 'ОС', 'Память (ОЗУ)', 'Процессор', 'HDD', 'Видеоконтроллер',
                        'СОМ порт', 'Сетевая карта', 'CD-ROM', 'Звуковая карта', 'Параллельный порт', 'Имя пользователя', 'Пользователи', 'Общие ресурсы',
                        'Логические диски', 'IP адрес', 'MAC адрес', 'Время загрузки', 'Последнее обновление'];
                    this.Load();
                }
                ComputerModalContent.prototype.ngOnDestroy = function () {
                    this.subscription.unsubscribe();
                };
                ComputerModalContent.prototype.Load = function () {
                    var _this = this;
                    console.log('LOad started');
                    //.computerGetterService.ComputerId
                    this.subscription = this.computerService.getFullData(this.data.computerId).subscribe(function (m) {
                        //this.dataSource.data = m;
                        _this.dataRaw = m;
                        console.log("Constructor ********************************");
                        console.log("m[0] computerName=" + m[0].computerName);
                        console.log("computerFullModel computerName=" + _this.dataRaw);
                        _this.computerName = m[0].computerName;
                        _this.transpose();
                        _this.fillLabels();
                    }); //editet by me
                };
                ComputerModalContent.prototype.transpose = function () {
                    console.log('transpose started');
                    var transposedData = [];
                    for (var column = 0; column < this.dataColumns.length; column++) {
                        transposedData[column] = {
                            label: this.labels[column]
                        };
                        console.log('this.dataRaw.length=' + this.dataRaw.length);
                        for (var row = 0; row < this.dataRaw.length; row++) {
                            transposedData[column]["column" + row] = this.dataRaw[row][this.dataColumns[column]];
                        }
                    }
                    this.dataSource = new material_1.MatTableDataSource(transposedData);
                };
                ComputerModalContent.prototype.fillLabels = function () {
                    console.log('fillLabels started');
                    this.displayedColumns = ['label'];
                    for (var i = 0; i < this.dataRaw.length; i++) {
                        this.displayedColumns.push('column' + i);
                    }
                };
                ComputerModalContent.prototype.close = function () {
                    this.dialogRef.close(null);
                };
                __decorate([
                    core_1.ViewChild(material_1.MatSort),
                    __metadata("design:type", material_1.MatSort)
                ], ComputerModalContent.prototype, "sort", void 0);
                __decorate([
                    core_1.ViewChild(material_1.MatPaginator),
                    __metadata("design:type", material_1.MatPaginator)
                ], ComputerModalContent.prototype, "paginator", void 0);
                ComputerModalContent = __decorate([
                    core_1.Component({
                        selector: 'modal-content',
                        templateUrl: "computer.modal.html",
                        providers: [computer_service_1.ComputerService]
                    }),
                    __param(2, core_1.Inject(material_1.MAT_DIALOG_DATA)),
                    __metadata("design:paramtypes", [material_1.MatDialogRef,
                        computer_service_1.ComputerService, Object])
                ], ComputerModalContent);
                return ComputerModalContent;
            }());
            exports_1("ComputerModalContent", ComputerModalContent);
            ServiceModalContent = /** @class */ (function () {
                //@ViewChild(MatPaginator) paginator: MatPaginator;
                function ServiceModalContent(dialogRef, serviceService, data) {
                    var _this = this;
                    this.dialogRef = dialogRef;
                    this.serviceService = serviceService;
                    this.data = data;
                    this.dataSource = new material_1.MatTableDataSource();
                    this.computerName = this.data.computerName;
                    this.subscription = this.serviceService.getService(this.data.computerId).subscribe(function (m) {
                        _this.dataSource.data = m;
                    });
                }
                ServiceModalContent.prototype.ngOnDestroy = function () {
                    this.subscription.unsubscribe();
                };
                ServiceModalContent.prototype.ngAfterViewInit = function () {
                    this.dataSource.sort = this.sort;
                    //this.dataSource.paginator = this.paginator;
                };
                ServiceModalContent.prototype.close = function () {
                    this.dialogRef.close(null);
                };
                ServiceModalContent.prototype.doFilter = function (filterValue) {
                    this.dataSource.filter = filterValue.trim().toLowerCase();
                };
                __decorate([
                    core_1.ViewChild(material_1.MatSort),
                    __metadata("design:type", material_1.MatSort)
                ], ServiceModalContent.prototype, "sort", void 0);
                ServiceModalContent = __decorate([
                    core_1.Component({
                        selector: 'modall-content',
                        templateUrl: 'service.modal.html',
                        providers: [service_service_1.ServiceService]
                    }),
                    __param(2, core_1.Inject(material_1.MAT_DIALOG_DATA)),
                    __metadata("design:paramtypes", [material_1.MatDialogRef,
                        service_service_1.ServiceService, Object])
                ], ServiceModalContent);
                return ServiceModalContent;
            }());
            exports_1("ServiceModalContent", ServiceModalContent);
            PrinterModalContent = /** @class */ (function () {
                function PrinterModalContent(dialogRef, 
                //private computerGetterService: ComputerGetterService,
                printerService, data) {
                    var _this = this;
                    this.dialogRef = dialogRef;
                    this.printerService = printerService;
                    this.data = data;
                    //this.serviceModel = new ServiceModel();
                    this.dataSource = new material_1.MatTableDataSource();
                    this.computerName = this.data.computerName;
                    this.subscription = this.printerService.getPrinter(this.data.computerId).subscribe(function (m) {
                        _this.dataSource.data = m;
                    });
                }
                PrinterModalContent.prototype.ngAfterViewInit = function () {
                    this.dataSource.sort = this.sort;
                };
                PrinterModalContent.prototype.ngOnDestroy = function () {
                    this.subscription.unsubscribe();
                };
                PrinterModalContent.prototype.close = function () {
                    this.dialogRef.close(null);
                };
                PrinterModalContent.prototype.doFilter = function (filterValue) {
                    this.dataSource.filter = filterValue.trim().toLowerCase();
                };
                __decorate([
                    core_1.ViewChild(material_1.MatSort),
                    __metadata("design:type", material_1.MatSort)
                ], PrinterModalContent.prototype, "sort", void 0);
                PrinterModalContent = __decorate([
                    core_1.Component({
                        selector: 'modalpr-content',
                        templateUrl: 'printer.modal.html',
                        providers: [printer_service_1.PrinterService]
                    }),
                    __param(2, core_1.Inject(material_1.MAT_DIALOG_DATA)),
                    __metadata("design:paramtypes", [material_1.MatDialogRef,
                        printer_service_1.PrinterService, Object])
                ], PrinterModalContent);
                return PrinterModalContent;
            }());
            exports_1("PrinterModalContent", PrinterModalContent);
            ComputerPaginationComponent = /** @class */ (function () {
                /////   Constructor \\\\\\\\\
                function ComputerPaginationComponent(computerService, computerModalService, serviceService, serviceModalService, productModalService, printerModalService) {
                    this.computerService = computerService;
                    this.computerModalService = computerModalService;
                    this.serviceService = serviceService;
                    this.serviceModalService = serviceModalService;
                    this.productModalService = productModalService;
                    this.printerModalService = printerModalService;
                    this.displayedColumns = ['computerId', 'model', 'serialNumber', 'computerName', 'userName', 'ipAddress', 'lastUpdate', 'actions', 'printers', 'services', 'products'];
                    this.dataSource = new material_1.MatTableDataSource();
                }
                //// Инициализация при старте страницы
                ComputerPaginationComponent.prototype.ngOnInit = function () {
                    //this.monitorModel=this.monitorService.getData();
                    this.buildForm();
                };
                ComputerPaginationComponent.prototype.ngAfterViewInit = function () {
                    this.dataSource.sort = this.sort;
                    this.dataSource.paginator = this.paginator;
                };
                ComputerPaginationComponent.prototype.refresh = function () {
                    this.buildForm();
                };
                ComputerPaginationComponent.prototype.buildForm = function () {
                    var _this = this;
                    this.computerService.getData().subscribe(function (t) {
                        //this.computerModel = t.map(m => m);
                        _this.dataSource.data = t; // .map(m => m.js); //      t as IComputerModel[];
                    });
                };
                ///// Событие при нажатии кнопки Подробнее
                ComputerPaginationComponent.prototype.onDetail = function (computerId) {
                    var dialogRef = this.computerModalService.open(ComputerModalContent, {
                        panelClass: 'mat-dialog-md',
                        data: { computerId: computerId }
                    });
                };
                ComputerPaginationComponent.prototype.doFilter = function (filterValue) {
                    this.dataSource.filter = filterValue.trim().toLowerCase();
                };
                ComputerPaginationComponent.prototype.onService = function (computerId, computerName) {
                    var dialogRef = this.printerModalService.open(ServiceModalContent, {
                        panelClass: 'mat-dialog-md',
                        data: { computerId: computerId, computerName: computerName }
                    });
                };
                ComputerPaginationComponent.prototype.onProduct = function (computerId, computerName) {
                    var dialogRef = this.productModalService.open(ProductModalContent, {
                        panelClass: 'mat-dialog-md',
                        data: { computerId: computerId, computerName: computerName }
                    });
                };
                ComputerPaginationComponent.prototype.onPrinter = function (computerId, computerName) {
                    var dialogRef = this.printerModalService.open(PrinterModalContent, {
                        panelClass: 'mat-dialog-md',
                        data: { computerId: computerId, computerName: computerName }
                    });
                };
                __decorate([
                    core_1.ViewChild(material_1.MatSort),
                    __metadata("design:type", material_1.MatSort)
                ], ComputerPaginationComponent.prototype, "sort", void 0);
                __decorate([
                    core_1.ViewChild(material_1.MatPaginator),
                    __metadata("design:type", material_1.MatPaginator)
                ], ComputerPaginationComponent.prototype, "paginator", void 0);
                ComputerPaginationComponent = __decorate([
                    core_1.Component({
                        selector: 'computer-pagination',
                        templateUrl: 'computer.html'
                    }),
                    __metadata("design:paramtypes", [computer_service_1.ComputerService,
                        material_1.MatDialog, service_service_1.ServiceService,
                        material_1.MatDialog, material_1.MatDialog, material_1.MatDialog])
                ], ComputerPaginationComponent);
                return ComputerPaginationComponent;
            }());
            exports_1("ComputerPaginationComponent", ComputerPaginationComponent);
            ProductModalContent = /** @class */ (function () {
                function ProductModalContent(dialogRef, productService, data) {
                    var _this = this;
                    this.dialogRef = dialogRef;
                    this.productService = productService;
                    this.data = data;
                    //this.serviceModel = new ServiceModel();
                    this.dataSource = new material_1.MatTableDataSource();
                    this.computerName = this.data.computerName;
                    this.subscription = this.productService.getProduct(this.data.computerId).subscribe(function (m) {
                        _this.dataSource.data = m;
                    });
                }
                ProductModalContent.prototype.ngAfterViewInit = function () {
                    this.dataSource.sort = this.sort;
                };
                ProductModalContent.prototype.ngOnDestroy = function () {
                    this.subscription.unsubscribe();
                };
                ProductModalContent.prototype.close = function () {
                    this.dialogRef.close(null);
                };
                ProductModalContent.prototype.doFilter = function (filterValue) {
                    this.dataSource.filter = filterValue.trim().toLowerCase();
                };
                __decorate([
                    core_1.ViewChild(material_1.MatSort),
                    __metadata("design:type", material_1.MatSort)
                ], ProductModalContent.prototype, "sort", void 0);
                ProductModalContent = __decorate([
                    core_1.Component({
                        selector: 'modalp-content',
                        templateUrl: 'product.modal.html',
                        providers: [product_service_1.ProductService]
                    }),
                    __param(2, core_1.Inject(material_1.MAT_DIALOG_DATA)),
                    __metadata("design:paramtypes", [material_1.MatDialogRef,
                        product_service_1.ProductService, Object])
                ], ProductModalContent);
                return ProductModalContent;
            }());
            exports_1("ProductModalContent", ProductModalContent);
        }
    };
});
