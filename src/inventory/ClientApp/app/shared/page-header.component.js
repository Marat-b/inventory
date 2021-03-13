// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================
System.register(["@angular/core"], function (exports_1, context_1) {
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
    var core_1, PageHeaderComponent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {// =============================
            // Email: info@ebenmonney.com
            // www.ebenmonney.com/templates
            // =============================
            PageHeaderComponent = /** @class */ (function () {
                function PageHeaderComponent() {
                }
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", String)
                ], PageHeaderComponent.prototype, "title", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", String)
                ], PageHeaderComponent.prototype, "icon", void 0);
                PageHeaderComponent = __decorate([
                    core_1.Component({
                        selector: 'app-page-header',
                        templateUrl: './page-header.component.html',
                        styleUrls: ['./page-header.component.scss']
                    })
                ], PageHeaderComponent);
                return PageHeaderComponent;
            }());
            exports_1("PageHeaderComponent", PageHeaderComponent);
        }
    };
});
