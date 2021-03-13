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
    var core_1, Footer, FooterModule;
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
            Footer = /** @class */ (function () {
                function Footer() {
                }
                Footer.prototype.getYear = function () {
                    return new Date().getUTCFullYear();
                };
                Footer = __decorate([
                    core_1.Component({
                        selector: 'app-footer',
                        templateUrl: './footer.component.html',
                        styleUrls: ['./footer.component.scss']
                    })
                ], Footer);
                return Footer;
            }());
            exports_1("Footer", Footer);
            FooterModule = /** @class */ (function () {
                function FooterModule() {
                }
                FooterModule = __decorate([
                    core_1.NgModule({
                        exports: [Footer],
                        declarations: [Footer],
                    })
                ], FooterModule);
                return FooterModule;
            }());
            exports_1("FooterModule", FooterModule);
        }
    };
});
