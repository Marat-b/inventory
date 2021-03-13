System.register(["@angular/core", "@angular/platform-browser", "@angular/platform-browser/animations", "@angular/forms", "@angular/router", "./app.component", "@angular/common/http", "@angular/common", "@angular/common/locales/ru", "./shared/Module/material.module", "./shared/service/monitor/monitor.service", "./shared/service/computer/computer.service", "./shared/service/service/service.service", "./shared/service/product/product.service", "./shared/service/printer/printer.service", "./shared/service/computer/computer.getter/computer.getter.service", "./components/monitor/monitor", "./components/computer/computer", "./components/home/home.component", "@angular/flex-layout", "./shared/service/endpoint-factory.service", "./shared/page-header.component", "./components/range-ipaddress/range-ipaddress.component", "./components/list-ipaddress/list-ipaddress.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var core_1, platform_browser_1, animations_1, forms_1, router_1, app_component_1, http_1, common_1, ru_1, material_module_1, monitor_service_1, computer_service_1, service_service_1, product_service_1, printer_service_1, computer_getter_service_1, monitor_1, computer_1, home_component_1, flex_layout_1, endpoint_factory_service_1, page_header_component_1, range_ipaddress_component_1, list_ipaddress_component_1, AppModule;
    var __moduleName = context_1 && context_1.id;
    function getBaseUrl() {
        return document.getElementsByTagName('base')[0].href;
    }
    exports_1("getBaseUrl", getBaseUrl);
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (animations_1_1) {
                animations_1 = animations_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ru_1_1) {
                ru_1 = ru_1_1;
            },
            function (material_module_1_1) {
                material_module_1 = material_module_1_1;
            },
            function (monitor_service_1_1) {
                monitor_service_1 = monitor_service_1_1;
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
            function (computer_getter_service_1_1) {
                computer_getter_service_1 = computer_getter_service_1_1;
            },
            function (monitor_1_1) {
                monitor_1 = monitor_1_1;
            },
            function (computer_1_1) {
                computer_1 = computer_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (flex_layout_1_1) {
                flex_layout_1 = flex_layout_1_1;
            },
            function (endpoint_factory_service_1_1) {
                endpoint_factory_service_1 = endpoint_factory_service_1_1;
            },
            function (page_header_component_1_1) {
                page_header_component_1 = page_header_component_1_1;
            },
            function (range_ipaddress_component_1_1) {
                range_ipaddress_component_1 = range_ipaddress_component_1_1;
            },
            function (list_ipaddress_component_1_1) {
                list_ipaddress_component_1 = list_ipaddress_component_1_1;
            }
        ],
        execute: function () {
            //import { APP_BASE_HREF } from '@angular/common';
            common_1.registerLocaleData(ru_1.default);
            AppModule = /** @class */ (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule, http_1.HttpClientModule, animations_1.BrowserAnimationsModule,
                            forms_1.FormsModule, material_module_1.InventoryMaterialModule,
                            router_1.RouterModule.forRoot([
                                { path: '', component: home_component_1.HomeComponent },
                                { path: 'computer', component: computer_1.ComputerPaginationComponent },
                                { path: 'monitor', component: monitor_1.MonitorPaginationComponent },
                                { path: 'range-ipaddress', component: range_ipaddress_component_1.RangeIpaddressComponent },
                                { path: 'list-ipaddress/:rangeId', component: list_ipaddress_component_1.ListIpaddressComponent }
                            ]), flex_layout_1.FlexLayoutModule, forms_1.ReactiveFormsModule
                        ],
                        declarations: [app_component_1.AppComponent, page_header_component_1.PageHeaderComponent,
                            monitor_1.MonitorPaginationComponent, computer_1.ComputerPaginationComponent,
                            home_component_1.HomeComponent,
                            computer_1.ComputerModalContent, computer_1.ServiceModalContent, computer_1.ProductModalContent, computer_1.PrinterModalContent, range_ipaddress_component_1.RangeIpaddressComponent,
                            range_ipaddress_component_1.RangeIpaddressDialogComponent,
                            list_ipaddress_component_1.ListIpaddressComponent],
                        providers: [
                            { provide: 'BASE_URL', useFactory: getBaseUrl },
                            monitor_service_1.MonitorService, computer_service_1.ComputerService, computer_getter_service_1.ComputerGetterService,
                            service_service_1.ServiceService, product_service_1.ProductService, endpoint_factory_service_1.EndpointFactory,
                            printer_service_1.PrinterService, { provide: core_1.LOCALE_ID, useValue: "ru" } /*, { provide: APP_BASE_HREF, useValue: '/inventory' }*/
                        ],
                        bootstrap: [app_component_1.AppComponent],
                        entryComponents: [computer_1.ComputerModalContent, computer_1.ServiceModalContent, computer_1.ProductModalContent, computer_1.PrinterModalContent,
                            range_ipaddress_component_1.RangeIpaddressDialogComponent]
                    })
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    };
});
