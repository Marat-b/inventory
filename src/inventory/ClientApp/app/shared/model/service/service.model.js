System.register([], function (exports_1, context_1) {
    "use strict";
    var ServiceModel;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            ServiceModel = /** @class */ (function () {
                function ServiceModel(name, displayName, startMode, state) {
                    this.name = name && name || "";
                    this.displayName = displayName && displayName || "";
                    this.startMode = startMode && startMode || "";
                    this.state = state && state || "";
                }
                return ServiceModel;
            }());
            exports_1("ServiceModel", ServiceModel);
        }
    };
});
