System.register([], function (exports_1, context_1) {
    "use strict";
    var RangeIpaddressModel;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            RangeIpaddressModel = /** @class */ (function () {
                function RangeIpaddressModel(rangeId, startAddress, endAddress) {
                    this.rangeId = rangeId;
                    this.startAddress = startAddress;
                    this.endAddress = endAddress;
                }
                return RangeIpaddressModel;
            }());
            exports_1("RangeIpaddressModel", RangeIpaddressModel);
        }
    };
});
