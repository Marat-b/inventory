System.register([], function (exports_1, context_1) {
    "use strict";
    var MonitorModel;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            MonitorModel = /** @class */ (function () {
                function MonitorModel(monitorId, computerName, serialNumber, model, lastUpdate) {
                    this.monitorId = monitorId;
                    this.computerName = computerName;
                    this.serialNumber = serialNumber;
                    this.model = model;
                    this.lastUpdate = lastUpdate;
                }
                return MonitorModel;
            }());
            exports_1("MonitorModel", MonitorModel);
        }
    };
});
