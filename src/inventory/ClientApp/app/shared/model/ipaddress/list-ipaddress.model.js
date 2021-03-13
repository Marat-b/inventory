System.register([], function (exports_1, context_1) {
    "use strict";
    var ListIpaddressModel;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            ListIpaddressModel = /** @class */ (function () {
                function ListIpaddressModel(listId, ipAddress, deviceName, macAddress, lastUpdate) {
                    this.listId = listId;
                    this.ipAddress = ipAddress;
                    this.macAddress = macAddress;
                    this.deviceName = deviceName;
                    this.lastUpdate = lastUpdate;
                }
                return ListIpaddressModel;
            }());
            exports_1("ListIpaddressModel", ListIpaddressModel);
        }
    };
});
