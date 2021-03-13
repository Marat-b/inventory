export interface IPrinterModel {
    caption: string;
    driverName: string;
    portName: string;
    local: string;

}

export class PrinterModel implements IPrinterModel {
    caption: string;
    driverName: string;
    portName: string;
    local: string;

    constructor(caption?: string,
        driverName?: string,
        portName?: string,
        local?: string
    ) {
        this.caption = caption && caption || "";
        this.driverName = driverName && driverName || "";
        this.portName = portName && portName || "";
        this.local = local && local || "";
    }
}