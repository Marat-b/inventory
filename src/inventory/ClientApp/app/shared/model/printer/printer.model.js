System.register([], function (exports_1, context_1) {
    "use strict";
    var PrinterModel;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            PrinterModel = /** @class */ (function () {
                function PrinterModel(caption, driverName, portName, local) {
                    this.caption = caption && caption || "";
                    this.driverName = driverName && driverName || "";
                    this.portName = portName && portName || "";
                    this.local = local && local || "";
                }
                return PrinterModel;
            }());
            exports_1("PrinterModel", PrinterModel);
        }
    };
});
