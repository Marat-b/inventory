System.register([], function (exports_1, context_1) {
    "use strict";
    var ComputerModel, ComputerFullModel;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            ComputerModel = /** @class */ (function () {
                function ComputerModel(computerId, computerName, serialNumber, model, lastUpdate, ipAddress, userName) {
                    this.computerId = computerId;
                    this.computerName = computerName;
                    this.serialNumber = serialNumber;
                    this.model = model;
                    this.lastUpdate = lastUpdate;
                    this.ipAddress = ipAddress;
                    this.userName = userName;
                }
                return ComputerModel;
            }());
            exports_1("ComputerModel", ComputerModel);
            ComputerFullModel = /** @class */ (function () {
                function ComputerFullModel(computerId, bios, bootTime, computerName, cdromDrive, diskDrive, ipAddress, lastUpdate, logicalDisk, macAddress, model, networkAdapter, operatingSystem, parallelPort, physicalMemory, pointingDevice, printer, processor, serialNumber, serialPort, share, soundDevice, userAccount, userName, videoController) {
                    this.computerId = computerId && computerId || 0;
                    this.bios = bios && bios || "";
                    this.bootTime = bootTime && bootTime || "";
                    this.cdromDrive = cdromDrive && cdromDrive || "";
                    this.computerName = computerName && computerName || "";
                    this.diskDrive = diskDrive && diskDrive || "";
                    this.ipAddress = ipAddress && ipAddress || "";
                    this.lastUpdate = lastUpdate && lastUpdate || "";
                    this.logicalDisk = logicalDisk && logicalDisk || "";
                    this.macAddress = macAddress && macAddress || "";
                    this.model = model && model || "";
                    this.networkAdapter = networkAdapter && networkAdapter || "";
                    this.operatingSystem = operatingSystem && operatingSystem || "";
                    this.parallelPort = parallelPort && parallelPort || "";
                    this.physicalMemory = physicalMemory && physicalMemory || "";
                    this.printer = printer && printer || "";
                    this.processor = processor && processor || "";
                    this.serialNumber = serialNumber && serialNumber || "";
                    this.serialPort = serialPort && serialPort || "";
                    this.share = share && share || "";
                    this.soundDevice = soundDevice && soundDevice || "";
                    this.userAccount = userAccount && userAccount || "";
                    this.userName = userName && userName || "";
                    this.videoController = videoController && videoController || "";
                }
                return ComputerFullModel;
            }());
            exports_1("ComputerFullModel", ComputerFullModel);
        }
    };
});
