webpackJsonp(["main"],{

/***/ "./ClientApp/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./ClientApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./ClientApp/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'my-app',
            template: __webpack_require__("./ClientApp/app/inventory.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./ClientApp/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./ClientApp/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_locales_ru__ = __webpack_require__("./node_modules/@angular/common/locales/ru.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_service_monitor_monitor_service__ = __webpack_require__("./ClientApp/app/shared/service/monitor/monitor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_service_computer_computer_service__ = __webpack_require__("./ClientApp/app/shared/service/computer/computer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_service_service_service_service__ = __webpack_require__("./ClientApp/app/shared/service/service/service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_service_product_product_service__ = __webpack_require__("./ClientApp/app/shared/service/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_service_computer_computer_getter_computer_getter_service__ = __webpack_require__("./ClientApp/app/shared/service/computer/computer.getter/computer.getter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_monitor_monitor__ = __webpack_require__("./ClientApp/app/components/monitor/monitor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_computer_computer__ = __webpack_require__("./ClientApp/app/components/computer/computer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_home_home_component__ = __webpack_require__("./ClientApp/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_computer_computer_item_computer_item__ = __webpack_require__("./ClientApp/app/components/computer/computer.item/computer.item.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









Object(__WEBPACK_IMPORTED_MODULE_7__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_8__angular_common_locales_ru__["a" /* default */]);
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { DataDb } from './shared/data/app.data'
/*import { ComputerDataDb,ComputerFullDataDb } from './shared/data/computer/computer.data'*/









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_16__components_home_home_component__["a" /* HomeComponent */] },
                    { path: 'computer', component: __WEBPACK_IMPORTED_MODULE_15__components_computer_computer__["b" /* ComputerPaginationComponent */] },
                    { path: 'monitor', component: __WEBPACK_IMPORTED_MODULE_14__components_monitor_monitor__["a" /* MonitorPaginationComponent */] }
                ])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_14__components_monitor_monitor__["a" /* MonitorPaginationComponent */], __WEBPACK_IMPORTED_MODULE_15__components_computer_computer__["b" /* ComputerPaginationComponent */], __WEBPACK_IMPORTED_MODULE_16__components_home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_17__components_computer_computer_item_computer_item__["a" /* ComputerItemComponent */], __WEBPACK_IMPORTED_MODULE_15__components_computer_computer__["a" /* ComputerModalContent */], __WEBPACK_IMPORTED_MODULE_15__components_computer_computer__["d" /* ServiceModalContent */], __WEBPACK_IMPORTED_MODULE_15__components_computer_computer__["c" /* ProductModalContent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_9__shared_service_monitor_monitor_service__["a" /* MonitorService */], __WEBPACK_IMPORTED_MODULE_10__shared_service_computer_computer_service__["a" /* ComputerService */], __WEBPACK_IMPORTED_MODULE_13__shared_service_computer_computer_getter_computer_getter_service__["a" /* ComputerGetterService */], __WEBPACK_IMPORTED_MODULE_11__shared_service_service_service_service__["a" /* ServiceService */], __WEBPACK_IMPORTED_MODULE_12__shared_service_product_product_service__["a" /* ProductService */], { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* LOCALE_ID */], useValue: "ru" }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_15__components_computer_computer__["a" /* ComputerModalContent */], __WEBPACK_IMPORTED_MODULE_15__components_computer_computer__["d" /* ServiceModalContent */], __WEBPACK_IMPORTED_MODULE_15__components_computer_computer__["c" /* ProductModalContent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./ClientApp/app/components/computer/computer.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-md-center\">\r\n    \r\n    <div class=\"col-md-6 mb-2\">\r\n        <div class=\"card  border-info text-center mx-auto w-100\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Компьютеры</h4>\r\n                <p class=\"card-text\">Находящиеся в использовании</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n </div>\r\n\r\n    <form class=\"form-inline\">\r\n        \r\n            <button class=\"btn btn-info\" (click)=\"containsName()\">Выбрать</button>\r\n        \r\n\r\n        <div class=\"form-group  mb-2 mx-auto w-100\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model\" [ngbTypeahead]=\"search\" name=\"search\" />\r\n        </div>\r\n\r\n    </form>\r\n    <ngb-pagination [collectionSize]=\"allItems\" [(page)]=\"page\" [pageSize]=\"pageSize\"\r\n                    (pageChange)=\"onPageChange($event)\"></ngb-pagination>\r\n\r\n    <table class=\"table table-hover\">\r\n        <thead>\r\n            <tr>\r\n                <th>ИД</th>\r\n                <th (click)=\"sortByModel()\">Модель</th>\r\n                <th (click)=\"sortBySerailNumber()\">Серийный номер</th>\r\n                <th (click)=\"sortByComputerName()\">Имя компьютера</th>\r\n                <th (click)=\"sortByUserName()\"> Имя пользователя</th>\r\n                <th (click)=\"sortByIpAddress()\">IP адрес</th>\r\n                <th>Дата обновления</th>\r\n                <th></th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let item of itemView\"\r\n                table-item [computerModel]=\"item\" (detailed)=\"onDetail($event)\" (serviced)=\"onService($event)\" (producted)=\"onProduct($event)\"></tr>\r\n        </tbody>\r\n    </table>\r\n"

/***/ }),

/***/ "./ClientApp/app/components/computer/computer.item/computer.item.html":
/***/ (function(module, exports) {

module.exports = "<td>{{computerModel.computerId}}</td>\r\n<td>{{computerModel.model}}</td>\r\n<td>{{computerModel.serialNumber}}</td>\r\n<td>{{computerModel.computerName}}</td>\r\n<td>{{computerModel.userName}}</td>\r\n<td>{{computerModel.ipAddress}}</td>\r\n<td>{{computerModel.lastUpdate | date: 'dd.MM.yyyy'}} {{computerModel.lastUpdate | date: 'mediumTime'}}</td>\r\n<td><button class=\"btn btn-outline-info\" (click)=\"products(computerModel.computerId)\">Продукты</button> </td>\r\n<td><button class=\"btn btn-outline-info\" (click)=\"services(computerModel.computerId)\">Службы</button> </td>\r\n<td><button class=\"btn btn-outline-info\" (click)=\"detail(computerModel.computerId)\">Подробнее</button> </td>\r\n"

/***/ }),

/***/ "./ClientApp/app/components/computer/computer.item/computer.item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComputerItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComputerItemComponent = /** @class */ (function () {
    function ComputerItemComponent() {
        this.itemId = 0;
        this.detailed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.serviced = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.producted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    ComputerItemComponent.prototype.detail = function (itemId) {
        this.itemId = itemId;
        console.log(this.itemId);
        console.log(this.computerModel.computerName);
        console.log(this.computerModel.serialNumber);
        this.detailed.emit(this.computerModel);
    };
    ComputerItemComponent.prototype.services = function (itemId) {
        this.itemId = itemId;
        this.serviced.emit(this.computerModel);
    };
    ComputerItemComponent.prototype.products = function (itemId) {
        this.itemId = itemId;
        this.producted.emit(this.computerModel);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ComputerItemComponent.prototype, "computerModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ComputerItemComponent.prototype, "serviceModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], ComputerItemComponent.prototype, "detailed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], ComputerItemComponent.prototype, "serviced", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], ComputerItemComponent.prototype, "producted", void 0);
    ComputerItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[table-item]',
            template: __webpack_require__("./ClientApp/app/components/computer/computer.item/computer.item.html")
        }),
        __metadata("design:paramtypes", [])
    ], ComputerItemComponent);
    return ComputerItemComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/computer/computer.modal.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <div class=\"card  text-white bg-primary mx-auto text-center w-75\">\r\n        <div class=\"card-body\">\r\n            <h4 class=\"card-title\">Компьютер </h4>\r\n            <h3 class=\"card-text\">{{computerFullModel.computerName}}</h3>\r\n        </div>\r\n     </div>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <h1></h1>\r\n  <table class=\"table table-bordered\">\r\n      <tr>\r\n          <td>Серийный номер</td>\r\n          <td>{{computerFullModel.serialNumber}}</td>\r\n      </tr>\r\n      <tr>\r\n          <td>BIOS</td>\r\n          <td>{{computerFullModel.bios}}</td>\r\n      </tr>\r\n      <tr>\r\n          <td>Модель</td>\r\n          <td>{{computerFullModel.model}}</td>\r\n      </tr>\r\n      <tr>\r\n          <td>ОС</td>\r\n          <td>{{computerFullModel.operatingSystem}}</td>\r\n      </tr>\r\n      <tr>\r\n          <td>Память (ОЗУ)</td>\r\n          <td>{{computerFullModel.physicalMemory}}</td>\r\n      </tr>\r\n      <tr>\r\n          <td>Процессор</td>\r\n          <td>{{computerFullModel.processor}}</td>\r\n      </tr>\r\n      <tr>\r\n          <td>HDD</td>\r\n          <td>{{computerFullModel.diskDrive}}</td>\r\n      </tr>\r\n      <tr>\r\n          <td>Видеоконтроллер</td>\r\n          <td>{{computerFullModel.videoController}}</td>\r\n      </tr>\r\n      <tr>\r\n          <td>СОМ порт</td>\r\n          <td>{{computerFullModel.serialPort}}</td>\r\n      </tr>\r\n      <tr>\r\n          <td>Сетевая карта</td>\r\n          <td>{{computerFullModel.networkAdapter}}</td>\r\n      </tr>\r\n      <tr>\r\n          <td>CD-ROM</td>\r\n          <td>{{computerFullModel.cdromDrive}}</td>\r\n      </tr>\r\n      <tr>\r\n          <td>Звуковая карта</td>\r\n          <td>{{computerFullModel.soundDevice}}</td>\r\n      </tr>\r\n      <tr>\r\n          <td>Параллельный порт</td>\r\n          <td>{{computerFullModel.parallelPort}}</td>\r\n      </tr>\r\n\r\n      <tr>\r\n          <td>Имя пользователя</td>\r\n          <td>{{computerFullModel.userName}}</td>\r\n      </tr>\r\n      <tr>\r\n          <td>Пользователи</td>\r\n          <td>{{computerFullModel.userAccount}}</td>\r\n      </tr>\r\n      <tr>\r\n          <td>Общие ресурсы</td>\r\n          <td>{{computerFullModel.share}}</td>\r\n      </tr>\r\n      <tr>\r\n          <td>Логические диски</td>\r\n          <td>{{computerFullModel.logicalDisk}}</td>\r\n      </tr>\r\n      <tr>\r\n          <td>IP адрес</td>\r\n          <td>{{computerFullModel.ipAddress}}</td>\r\n      </tr>\r\n      <tr>\r\n          <td>MAC адрес</td>\r\n          <td>{{computerFullModel.macAddress}}</td>\r\n      </tr>\r\n      <tr>\r\n          <td>Время загрузки</td>\r\n          <td>{{computerFullModel.bootupTime | date: 'dd.MM.yyyy'}} {{computerFullModel.bootupTime | date: 'mediumTime'}}</td>\r\n      </tr>\r\n      <tr>\r\n          <td>Последнее обновление</td>\r\n          <td>{{computerFullModel.lastUpdate | date: 'dd.MM.yyyy'}} {{computerFullModel.lastUpdate | date: 'mediumTime'}}</td>\r\n      </tr>\r\n  </table>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"activeModal.close()\">Закрыть</button>\r\n</div>\r\n"

/***/ }),

/***/ "./ClientApp/app/components/computer/computer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComputerModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ServiceModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ProductModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ComputerPaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_computer_computer_service__ = __webpack_require__("./ClientApp/app/shared/service/computer/computer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_service_service_service__ = __webpack_require__("./ClientApp/app/shared/service/service/service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_product_product_service__ = __webpack_require__("./ClientApp/app/shared/service/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_computer_computer_getter_computer_getter_service__ = __webpack_require__("./ClientApp/app/shared/service/computer/computer.getter/computer.getter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_model_computer_computer_model__ = __webpack_require__("./ClientApp/app/shared/model/computer/computer.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/////////////////// Modal window \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
var ComputerModalContent = /** @class */ (function () {
    function ComputerModalContent(activeModal, computerGetterService, computerService) {
        var _this = this;
        this.activeModal = activeModal;
        this.computerGetterService = computerGetterService;
        this.computerService = computerService;
        this.computerFullModel = new __WEBPACK_IMPORTED_MODULE_6__shared_model_computer_computer_model__["a" /* ComputerFullModel */](); //0, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""
        //this.computerFullModel = [];
        console.log("computerFullModel.serialNumber=" + this.computerFullModel.serialNumber);
        this.subscription = this.computerService.getFullData(this.computerGetterService.ComputerId).subscribe(function (m) {
            _this.computerFullModel = m;
            console.log("Constructor ********************************");
            //console.log("m[0] computerName=" + m.computerName);
            //console.log("computerFullModel computerName=" + this.computerFullModel.computerName);
        }); //editet by me
    }
    ComputerModalContent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ComputerModalContent.prototype, "computerItem", void 0);
    ComputerModalContent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'modal-content',
            template: __webpack_require__("./ClientApp/app/components/computer/computer.modal.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_service_computer_computer_service__["a" /* ComputerService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */], __WEBPACK_IMPORTED_MODULE_5__shared_service_computer_computer_getter_computer_getter_service__["a" /* ComputerGetterService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_service_computer_computer_service__["a" /* ComputerService */]])
    ], ComputerModalContent);
    return ComputerModalContent;
}());

/////// Service modal window \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
var ServiceModalContent = /** @class */ (function () {
    function ServiceModalContent(activeModal, computerGetterService, serviceService) {
        var _this = this;
        this.activeModal = activeModal;
        this.computerGetterService = computerGetterService;
        this.serviceService = serviceService;
        //this.serviceModel = new ServiceModel();
        this.computerName = this.computerGetterService.computerName;
        this.subscription = this.serviceService.getService(this.computerGetterService.ComputerId).subscribe(function (m) {
            _this.serviceModel = m;
        });
    }
    ServiceModalContent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ServiceModalContent.prototype.sortByName = function () {
        this.serviceModel = this.serviceModel.map(function (m) { return m; }).sort(function (a, b) {
            if (a.name > b.name)
                return 1;
            else if (a.name < b.name)
                return -1;
            else
                return 0;
        });
    };
    ServiceModalContent.prototype.sortByDisplayName = function () {
        this.serviceModel = this.serviceModel.map(function (m) { return m; }).sort(function (a, b) {
            if (a.displayName > b.displayName)
                return 1;
            else if (a.displayName < b.displayName)
                return -1;
            else
                return 0;
        });
    };
    ServiceModalContent.prototype.sortByStartMode = function () {
        this.serviceModel = this.serviceModel.map(function (m) { return m; }).sort(function (a, b) {
            if (a.startMode > b.startMode)
                return 1;
            else if (a.startMode < b.startMode)
                return -1;
            else
                return 0;
        });
    };
    ServiceModalContent.prototype.sortByState = function () {
        this.serviceModel = this.serviceModel.map(function (m) { return m; }).sort(function (a, b) {
            if (a.state > b.state)
                return 1;
            else if (a.state < b.state)
                return -1;
            else
                return 0;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ServiceModalContent.prototype, "computerItem", void 0);
    ServiceModalContent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'modall-content',
            template: __webpack_require__("./ClientApp/app/components/computer/service.modal.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared_service_service_service_service__["a" /* ServiceService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_5__shared_service_computer_computer_getter_computer_getter_service__["a" /* ComputerGetterService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_service_service_service_service__["a" /* ServiceService */]])
    ], ServiceModalContent);
    return ServiceModalContent;
}());

/////// Product modal window \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
var ProductModalContent = /** @class */ (function () {
    function ProductModalContent(activeModal, computerGetterService, productService) {
        var _this = this;
        this.activeModal = activeModal;
        this.computerGetterService = computerGetterService;
        this.productService = productService;
        //this.serviceModel = new ServiceModel();
        this.computerName = this.computerGetterService.computerName;
        this.subscription = this.productService.getProduct(this.computerGetterService.ComputerId).subscribe(function (m) {
            _this.productModel = m;
        });
    }
    ProductModalContent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ProductModalContent.prototype.sortByCaption = function () {
        this.productModel = this.productModel.map(function (m) { return m; }).sort(function (a, b) {
            if (a.caption > b.caption)
                return 1;
            else if (a.caption < b.caption)
                return -1;
            else
                return 0;
        });
    };
    ProductModalContent.prototype.sortByVersion = function () {
        this.productModel = this.productModel.map(function (m) { return m; }).sort(function (a, b) {
            if (a.version > b.version)
                return 1;
            else if (a.version < b.version)
                return -1;
            else
                return 0;
        });
    };
    ProductModalContent.prototype.sortByInstallDate = function () {
        this.productModel = this.productModel.map(function (m) { return m; }).sort(function (a, b) {
            if (a.installDate > b.installDate)
                return 1;
            else if (a.installDate < b.installDate)
                return -1;
            else
                return 0;
        });
    };
    ProductModalContent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'modalp-content',
            template: __webpack_require__("./ClientApp/app/components/computer/product.modal.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_4__shared_service_product_product_service__["a" /* ProductService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_5__shared_service_computer_computer_getter_computer_getter_service__["a" /* ComputerGetterService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_service_product_product_service__["a" /* ProductService */]])
    ], ProductModalContent);
    return ProductModalContent;
}());

var ComputerPaginationComponent = /** @class */ (function () {
    /////   Constructor \\\\\\\\\
    function ComputerPaginationComponent(computerService, config, computerGetterService, computerModalService, serviceService, serviceModalService, productModalService) {
        this.computerService = computerService;
        this.config = config;
        this.computerGetterService = computerGetterService;
        this.computerModalService = computerModalService;
        this.serviceService = serviceService;
        this.serviceModalService = serviceModalService;
        this.productModalService = productModalService;
        this.page = 1;
        this.computerModel = [];
        this.pageSize = 15;
        this.currentPage = 1;
    }
    //// Инициализация при старте страницы
    ComputerPaginationComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.monitorModel=this.monitorService.getData();
        this.computerService.getData().subscribe(function (t) {
            //this.computerModel = t.map(m => m);
            _this.computerModel = t; // .map(m => m.js); //      t as IComputerModel[];
            //.filter(f=>f.model.toUpperCase().indexOf(this.model.toUpperCase())>=0)
            //.map(m=>{console.log("m="+m);return m});
            console.log("inner this.computerModel computerId=" + _this.computerModel[0].computerId);
            console.log("inner this.computerModel computerName=" + _this.computerModel[0].computerName);
            console.log("inner this.computerModel serialNumber=" + _this.computerModel[0].serialNumber);
            _this.itemView = _this.computerModel.slice(0, _this.pageSize);
            console.log("inner this.itemView computerId=" + _this.itemView[0].computerId);
            console.log("inner this.itemView computerName=" + _this.itemView[0].computerName);
            console.log("inner this.itemView serialNumber=" + _this.itemView[0].serialNumber);
            _this.allItems = _this.computerModel.length;
        });
        // console.log("allItems="+this.allItems);
        this.search = function (text$) { return text$.debounceTime(200).distinctUntilChanged()
            .map(function (term) { return term.length < 2 ? [] : _this.computerModel
            .map(function (m) { return m.model; })
            .filter(function (v) { return new RegExp(term, 'gi').test(v); }).splice(0, 10); }); };
    };
    ///// Событие при нажатии кнопки Подробнее
    ComputerPaginationComponent.prototype.onDetail = function (model) {
        //console.log(model);
        this.computerGetterService.ComputerId = model.computerId;
        this.computerModalService.open(ComputerModalContent, { size: 'lg' });
        /*.result
        .then((result) => console.log("onDetail result="+ result), () => console.log("cancel"));*/
    };
    ComputerPaginationComponent.prototype.onService = function (model) {
        this.computerGetterService.ComputerId = model.computerId;
        //this.serviceService.getService(3690).subscribe(m => {});
        this.serviceModalService.open(ServiceModalContent, { size: 'lg' });
    };
    ComputerPaginationComponent.prototype.onProduct = function (model) {
        this.computerGetterService.ComputerId = model.computerId;
        this.computerGetterService.ComputerName = model.computerName;
        //this.serviceService.getService(3690).subscribe(m => {});
        this.productModalService.open(ProductModalContent, { size: 'lg' });
    };
    ////// Событие при изменении страницы Pagination
    ComputerPaginationComponent.prototype.onPageChange = function (currentPage) {
        // console.log("currentPage="+currentPage);
        // console.log("this.computerModel.length="+this.computerModel.length);
        // console.log("allItems="+this.allItems);
        this.currentPage = currentPage;
        var begin = (currentPage - 1) * this.pageSize;
        var end = begin + this.pageSize;
        this.itemView = this.computerModel.slice(begin, end);
    };
    ////// Typeahead - поиск по имени модели
    ComputerPaginationComponent.prototype.containsName = function () {
        var _this = this;
        console.log("computer.ts containsName this.model=" + this.model);
        this.computerService.getData().subscribe(function (t) {
            _this.computerModel = t.map(function (m) { return m; })
                .filter(function (f) { return f.model.toUpperCase().indexOf(_this.model.toUpperCase()) >= 0; });
            //.map(m=>{console.log("m="+m);return m});
            // console.log("inner this.computerModel="+this.computerModel);
            _this.itemView = _this.computerModel.slice(0, _this.pageSize);
            _this.allItems = _this.computerModel.length;
        }); // edited by me
    };
    ///// Вернуть отсортированную модель
    ComputerPaginationComponent.prototype.getSortedModel = function (model) {
        var begin = (this.currentPage - 1) * this.pageSize;
        var end = begin + this.pageSize;
        // console.log("this.currentPage=" + this.currentPage + ", begin=" + begin + ", end=" + end);
        return model.slice(begin, end);
    };
    ///// Сортировка по имени модели
    ComputerPaginationComponent.prototype.sortByModel = function () {
        console.log("click Model");
        this.computerModel = this.computerModel.map(function (m) { return m; }).sort(function (a, b) {
            if (a.model > b.model)
                return 1;
            else if (a.model < b.model)
                return -1;
            else
                return 0;
        });
        this.itemView = this.getSortedModel(this.computerModel);
    };
    //////  Сортировка по серийному номеру
    ComputerPaginationComponent.prototype.sortBySerailNumber = function () {
        this.computerModel = this.computerModel.map(function (m) { return m; }).sort(function (a, b) {
            if (a.serialNumber > b.serialNumber)
                return 1;
            else if (a.serialNumber < b.serialNumber)
                return -1;
            else
                return 0;
        });
        this.itemView = this.getSortedModel(this.computerModel);
    };
    //////  Сортировка по имени компьютера
    ComputerPaginationComponent.prototype.sortByComputerName = function () {
        this.computerModel = this.computerModel.map(function (m) { return m; }).sort(function (a, b) {
            if (a.computerName > b.computerName)
                return 1;
            else if (a.computerName < b.computerName)
                return -1;
            else
                return 0;
        });
        this.itemView = this.getSortedModel(this.computerModel);
    };
    //////  Сортировка по имени компьютера
    ComputerPaginationComponent.prototype.sortByIpAddress = function () {
        this.computerModel = this.computerModel.map(function (m) { return m; }).sort(function (a, b) {
            if (a.ipAddress > b.ipAddress)
                return 1;
            else if (a.ipAddress < b.ipAddress)
                return -1;
            else
                return 0;
        });
        this.itemView = this.getSortedModel(this.computerModel);
    };
    ///// Sorted by user name \\\\\\\\\\\\\\\\\\\\
    ComputerPaginationComponent.prototype.sortByUserName = function () {
        this.computerModel = this.computerModel.map(function (m) { return m; }).sort(function (a, b) {
            if (a.userName > b.userName)
                return 1;
            else if (a.userName < b.userName)
                return -1;
            else
                return 0;
        });
        this.itemView = this.getSortedModel(this.computerModel);
    };
    ComputerPaginationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'computer-pagination',
            template: __webpack_require__("./ClientApp/app/components/computer/computer.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["d" /* NgbPaginationConfig */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_service_computer_computer_service__["a" /* ComputerService */], __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["d" /* NgbPaginationConfig */],
            __WEBPACK_IMPORTED_MODULE_5__shared_service_computer_computer_getter_computer_getter_service__["a" /* ComputerGetterService */], __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_3__shared_service_service_service_service__["a" /* ServiceService */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], ComputerPaginationComponent);
    return ComputerPaginationComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/computer/product.modal.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <div class=\"card  text-white bg-primary mx-auto text-center w-75\">\r\n\r\n        <h3 class=\"card-text\">Компьютер </h3>\r\n        <h3 class=\"card-title\">{{computerName}}</h3>\r\n\r\n    </div>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <table class=\"table table-bordered table-hover\">\r\n        <tr>\r\n            \r\n            <th (click)=\"sortByCaption()\">Описание</th>\r\n            <th (click)=\"sortByVersion()\">Версия</th>\r\n            <th (click)=\"sortByInstallDate()\">Дата инсталляции</th>\r\n        </tr>\r\n        <tr *ngFor=\"let item of productModel\">\r\n            <td>{{item.caption}}</td>\r\n            <td>{{item.version}}</td>\r\n            <td>{{item.installDate}}</td>\r\n        </tr>\r\n    </table>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"activeModal.close()\">Закрыть</button>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/components/computer/service.modal.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <div class=\"card text-white bg-primary mx-auto text-center w-75\">\r\n        \r\n        <h3 class=\"card-text\">Компьютер </h3>\r\n        <h3 class=\"card-title\">{{computerName}}</h3>\r\n        \r\n    </div>\r\n</div>\r\n<div class=\"modal-body\">\r\n    <table class=\"table table-bordered table-hover\">\r\n        <tr>\r\n            <th (click)=\"sortByName()\">Имя</th>\r\n            <th (click)=\"sortByDisplayName()\">Описание</th>\r\n            <th (click)=\"sortByStartMode()\">Режим</th>\r\n            <th (click)=\"sortByState()\">Состояние</th>\r\n        </tr>\r\n        <tr *ngFor=\"let item of serviceModel\">\r\n            <td>{{item.name}}</td>\r\n            <td>{{item.displayName}}</td>\r\n            <td>{{item.startMode}}</td>\r\n            <td>{{item.state}}</td>\r\n        </tr>\r\n    </table>\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"activeModal.close()\">Закрыть</button>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"jumbotron jumbotron-fluid\">\r\n    <h1>Hero</h1>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./ClientApp/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'home-component',
            template: __webpack_require__("./ClientApp/app/components/home/home.component.html")
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./ClientApp/app/components/monitor/monitor.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"card card-block card-outline-info mb-5 text-center\">\r\n        <h4 class=\"card-title\">Мониторы</h4>\r\n        <p class=\"card-text\">Находящиеся в использовании</p>\r\n    </div>\r\n</div>\r\n<div class=\"form-group row\">\r\n  <div class=\"col-md-2\">\r\n    <button class=\"btn btn-info\" (click)=\"containsName()\">Выбрать</button>\r\n  </div>\r\n\r\n  <div class=\"col-md-10\">\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model\" [ngbTypeahead]=\"search\" />\r\n  </div>\r\n\r\n</div>\r\n<ngb-pagination [collectionSize]=\"allItems\" [(page)]=\"page\" [pageSize]=\"pageSize\"\r\n (pageChange)=\"onPageChange($event)\"></ngb-pagination>\r\n\r\n<table class=\"table table-hover\">\r\n  <thead>\r\n    <tr>\r\n      <th>ИД</th>\r\n      <th (click)=\"sortByModel()\">Модель</th>\r\n      <th (click)=\"sortBySerailNumber()\">Серийный номер</th>\r\n      <th (click)=\"sortByComputerName()\">Имя компьютера</th>\r\n      <th>Дата обновления</th>\r\n    </tr>\r\n  </thead>\r\n  <tr *ngFor=\"let item of itemView\" >\r\n    <td>{{item.monitorId}}</td>\r\n    <td>{{item.model}}</td>\r\n    <td>{{item.serialNumber}}</td>\r\n    <td>{{item.computerName}}</td>\r\n    <td>{{item.lastUpdate | date: 'dd.MM.yyyy'}} {{item.lastUpdate | date: 'mediumTime'}}</td>\r\n\r\n  </tr>\r\n\r\n</table>\r\n"

/***/ }),

/***/ "./ClientApp/app/components/monitor/monitor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonitorPaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_monitor_monitor_service__ = __webpack_require__("./ClientApp/app/shared/service/monitor/monitor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_from__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/from.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MonitorPaginationComponent = /** @class */ (function () {
    /////   Constructor \\\\\\\\\
    function MonitorPaginationComponent(monitorService, config) {
        this.monitorService = monitorService;
        this.config = config;
        this.page = 1;
        this.monitorModel = [];
        this.pageSize = 15;
        this.currentPage = 1;
    }
    //// Инициализация при старте страницы
    MonitorPaginationComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.monitorModel=this.monitorService.getData();
        this.monitorService.getData().subscribe(function (t) {
            _this.monitorModel = t.map(function (m) { return m; });
            //.filter(f=>f.model.toUpperCase().indexOf(this.model.toUpperCase())>=0)
            //.map(m=>{console.log("m="+m);return m});
            //console.log("inner this.testModel="+this.monitorModel);
            _this.itemView = _this.monitorModel.slice(0, _this.pageSize);
            _this.allItems = _this.monitorModel.length;
        });
        //console.log("allItems="+this.allItems);
        this.search = function (text$) { return text$.debounceTime(200).distinctUntilChanged()
            .map(function (term) { return term.length < 2 ? [] : _this.monitorModel
            .map(function (m) { return m.model; })
            .filter(function (v) { return new RegExp(term, 'gi').test(v); }).splice(0, 10); }); };
    };
    ////// Событие при изменении страницы Pagination
    MonitorPaginationComponent.prototype.onPageChange = function (currentPage) {
        //console.log("currentPage="+currentPage);
        //console.log("this.testModel.length="+this.monitorModel.length);
        //console.log("allItems="+this.allItems);
        this.currentPage = currentPage;
        var begin = (currentPage - 1) * this.pageSize;
        var end = begin + this.pageSize;
        this.itemView = this.monitorModel.slice(begin, end);
    };
    ////// Typeahead - поиск по имени модели
    MonitorPaginationComponent.prototype.containsName = function () {
        //console.log("this.model="+this.model);
        var _this = this;
        this.monitorService.getData().subscribe(function (t) {
            _this.monitorModel = t.map(function (m) { return m; })
                .filter(function (f) { return f.model.toUpperCase().indexOf(_this.model.toUpperCase()) >= 0; });
            //.map(m=>{console.log("m="+m);return m});
            //console.log("inner this.testModel="+this.monitorModel);
            _this.itemView = _this.monitorModel.slice(0, _this.pageSize);
            _this.allItems = _this.monitorModel.length;
        });
    };
    ///// Вернуть отсортированную модель
    MonitorPaginationComponent.prototype.getSortedModel = function (model) {
        var begin = (this.currentPage - 1) * this.pageSize;
        var end = begin + this.pageSize;
        //console.log("this.currentPage="+this.currentPage+", begin="+begin+", end="+end);
        return model.slice(begin, end);
    };
    ////// Сортировка по имени модели
    MonitorPaginationComponent.prototype.sortByModel = function () {
        //console.log("click Model");
        this.monitorModel = this.monitorModel.map(function (m) { return m; }).sort(function (a, b) {
            if (a.model > b.model)
                return 1;
            else if (a.model < b.model)
                return -1;
            else
                return 0;
        });
        this.itemView = this.getSortedModel(this.monitorModel);
    };
    //////  Сортировка по серийному номеру
    MonitorPaginationComponent.prototype.sortBySerailNumber = function () {
        this.monitorModel = this.monitorModel.map(function (m) { return m; }).sort(function (a, b) {
            if (a.serialNumber > b.serialNumber)
                return 1;
            else if (a.serialNumber < b.serialNumber)
                return -1;
            else
                return 0;
        });
        this.itemView = this.getSortedModel(this.monitorModel);
    };
    //////  Сортировка по имени компьютера
    MonitorPaginationComponent.prototype.sortByComputerName = function () {
        this.monitorModel = this.monitorModel.map(function (m) { return m; }).sort(function (a, b) {
            if (a.computerName > b.computerName)
                return 1;
            else if (a.computerName < b.computerName)
                return -1;
            else
                return 0;
        });
        this.itemView = this.getSortedModel(this.monitorModel);
    };
    MonitorPaginationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'monitor-pagination',
            template: __webpack_require__("./ClientApp/app/components/monitor/monitor.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["d" /* NgbPaginationConfig */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_service_monitor_monitor_service__["a" /* MonitorService */], __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["d" /* NgbPaginationConfig */]])
    ], MonitorPaginationComponent);
    return MonitorPaginationComponent;
}());



/***/ }),

/***/ "./ClientApp/app/inventory.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n        \r\n            <nav class=\"navbar navbar-expand-lg navbar-light bg-faded\">\r\n                <a class=\"navbar-brand\" routerLink=\"/\">Главная</a>\r\n                <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n                    <ul class=\"navbar-nav mr-auto\">\r\n                        <li class=\"nav-item dropdown\">\r\n                            <a class=\"nav-link dropdown-toggle\" routerLink=\"/computer\">Компьютеры</a>\r\n                        </li>\r\n                        <li class=\"nav-item\">\r\n                            <a class=\"nav-link\" routerLink=\"/monitor\">Мониторы</a>\r\n                        </li>\r\n                       \r\n                    </ul>\r\n                </div>\r\n            </nav>\r\n        \r\n\r\n\r\n\r\n    \r\n        <router-outlet></router-outlet>\r\n        <template ngbModalContainer>\r\n        </template>\r\n    \r\n\r\n"

/***/ }),

/***/ "./ClientApp/app/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__("./ClientApp/app/app.module.ts");



//const platform = platformBrowserDynamic();
//platform.bootstrapModule(AppModule);
Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);


/***/ }),

/***/ "./ClientApp/app/shared/model/computer/computer.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ComputerModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComputerFullModel; });
var ComputerModel = /** @class */ (function () {
    function ComputerModel(computerId, computerName, serialNumber, model, lastUpdate, ipAddress, userName) {
        this.computerId = computerId;
        this.computerName = computerName;
        this.serialNumber = serialNumber;
        this.model = model;
        this.lastUpdate = lastUpdate;
        this.ipAddress = ipAddress;
        this.userName = userName;
    }
    return ComputerModel;
}());

var ComputerFullModel = /** @class */ (function () {
    function ComputerFullModel(computerId, bios, bootTime, computerName, cDROMDrive, diskDrive, ipAddress, lastUpdate, logicalDisk, mACAddress, model, operatingSystem, parallelPort, physicalMemory, pointingDevice, printer, processor, serialNumber, serialPort, share, soundDevice, userAccount, userName, videoController) {
        this.computerId = computerId && computerId || 0;
        this.bios = bios && bios || "";
        this.bootTime = bootTime && bootTime || "";
        this.cDROMDrive = cDROMDrive && cDROMDrive || "";
        this.computerName = computerName && computerName || "";
        this.diskDrive = diskDrive && diskDrive || "";
        this.ipAddress = ipAddress && ipAddress || "";
        this.lastUpdate = lastUpdate && lastUpdate || "";
        this.logicalDisk = logicalDisk && logicalDisk || "";
        this.mACAddress = mACAddress && mACAddress || "";
        this.model = model && model || "";
        this.operatingSystem = operatingSystem && operatingSystem || "";
        this.parallelPort = parallelPort && parallelPort || "";
        this.physicalMemory = physicalMemory && physicalMemory || "";
        this.printer = printer && printer || "";
        this.processor = processor && processor || "";
        this.serialNumber = serialNumber && serialNumber || "";
        this.serialPort = serialPort && serialPort || "";
        this.share = share && share || "";
        this.soundDevice = soundDevice && soundDevice || "";
        this.userAccount = userAccount && userAccount || "";
        this.userName = userName && userName || "";
        this.videoController = videoController && videoController || "";
    }
    return ComputerFullModel;
}());



/***/ }),

/***/ "./ClientApp/app/shared/service/computer/computer.getter/computer.getter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComputerGetterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComputerGetterService = /** @class */ (function () {
    function ComputerGetterService() {
        this.computerId = 0;
        this.computerName = "";
    }
    Object.defineProperty(ComputerGetterService.prototype, "ComputerId", {
        get: function () {
            //console.log('get this.itemId='+this.computerId);
            return this.computerId;
        },
        set: function (value) {
            this.computerId = value;
            //console.log('set this.computerId='+this.computerId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComputerGetterService.prototype, "ComputerName", {
        get: function () {
            return this.computerName;
        },
        set: function (value) {
            this.computerName = value;
        },
        enumerable: true,
        configurable: true
    });
    ComputerGetterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ComputerGetterService);
    return ComputerGetterService;
}());



/***/ }),

/***/ "./ClientApp/app/shared/service/computer/computer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComputerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import Computermodel = require("../../model/computer/computer.model");
//import { flatMap } from 'rxjs/operators/flatMap';
var ComputerService = /** @class */ (function () {
    //private dataUrl2="api/Computer";
    function ComputerService(http) {
        this.http = http;
        this.dataUrl = "api/Computer";
    }
    //: Observable<IComputerModel[]>
    ComputerService.prototype.getData = function () {
        return this.http.get(this.dataUrl); /*.pipe(
            tap(t=>console.log("t="+t)),
            map(m => {return new IComputerModel (m.)})
        
        );*/ //<-- edited by me#1#
    };
    //.catch(this.handleError);
    //.then((response:Response)=>response.json() as IComputerModel[]) 
    ComputerService.prototype.getFullData = function (searched) {
        return this.http.get(this.dataUrl + "/" + searched)
            .flatMap(function (f) { return f; }); // => response.json() as IComputerFullModel[]); //editet by me
        //.filter((r:IComputerFullModel)=>r.computerId===searched)
        //   .catch(this.handleError);
    };
    ComputerService.prototype.handleError = function (error) {
        //console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ComputerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ComputerService);
    return ComputerService;
}());



/***/ }),

/***/ "./ClientApp/app/shared/service/monitor/monitor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonitorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MonitorService = /** @class */ (function () {
    function MonitorService(http) {
        this.http = http;
        this.dataUrl = "api/Monitor";
    }
    MonitorService.prototype.getData = function () {
        return this.http.get(this.dataUrl);
        //.toPromise()
        //.then((response:Response)=>response.json() as IMonitorModel[]) //edited by me
        //.catch(this.handleError);
    };
    MonitorService.prototype.handleError = function (error) {
        //console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    MonitorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MonitorService);
    return MonitorService;
}());



/***/ }),

/***/ "./ClientApp/app/shared/service/product/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.dataUrl = "api/Product";
    }
    ProductService.prototype.getProduct = function (item) {
        return this.http.get(this.dataUrl + "/" + item);
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./ClientApp/app/shared/service/service/service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServiceService = /** @class */ (function () {
    function ServiceService(http) {
        this.http = http;
        this.dataUrl = "api/Service";
    }
    ServiceService.prototype.getService = function (item) {
        return this.http.get(this.dataUrl + "/" + item);
    };
    ServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ServiceService);
    return ServiceService;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./ClientApp/app/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map