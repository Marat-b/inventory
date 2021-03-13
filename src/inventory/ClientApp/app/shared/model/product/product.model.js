System.register([], function (exports_1, context_1) {
    "use strict";
    var ProductModel;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            ProductModel = /** @class */ (function () {
                function ProductModel(caption, version, installDate) {
                    this.caption = caption && caption || "";
                    this.version = version && version || "";
                    this.installDate = installDate && installDate || "";
                }
                return ProductModel;
            }());
            exports_1("ProductModel", ProductModel);
        }
    };
});
