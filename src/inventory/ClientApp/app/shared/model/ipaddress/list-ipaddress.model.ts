export interface IListIpaddressModel {
    listId:number;
    ipAddress: string;
    macAddress: string;
    deviceName:string;
    lastUpdate:any;
}

export class ListIpaddressModel implements IListIpaddressModel
{
    listId:number;
    ipAddress: string;
    macAddress: string;
    deviceName:string;
    lastUpdate:any;

    constructor (
        listId:number,
        ipAddress: string,
        deviceName:string,
        macAddress: string,
         lastUpdate:any
    )
    {
        this.listId= listId;
        this.ipAddress= ipAddress;
        this.macAddress= macAddress;
        this.deviceName= deviceName;
        this.lastUpdate= lastUpdate;
    }
}
