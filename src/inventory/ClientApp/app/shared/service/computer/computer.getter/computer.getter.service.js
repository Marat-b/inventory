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
    var core_1, ComputerGetterService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            ComputerGetterService = /** @class */ (function () {
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
                    core_1.Injectable(),
                    __metadata("design:paramtypes", [])
                ], ComputerGetterService);
                return ComputerGetterService;
            }());
            exports_1("ComputerGetterService", ComputerGetterService);
        }
    };
});
