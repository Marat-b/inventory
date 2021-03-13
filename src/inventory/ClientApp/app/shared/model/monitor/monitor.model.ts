export interface IMonitorModel {
  monitorId:number;
  computerName:string;
  serialNumber:string;
  model:string;
  lastUpdate:string;
}

export class MonitorModel implements IMonitorModel
{
  monitorId:number;
  computerName:string;
  serialNumber:string;
  model:string;
  lastUpdate:string;

  constructor (monitorId:number,
  computerName:string,
  serialNumber:string,
  model:string,
  lastUpdate:string)
  {
    this.monitorId=monitorId;
    this.computerName=computerName;
    this.serialNumber=serialNumber;
    this.model=model;
    this.lastUpdate=lastUpdate;
  }
}
