export interface IComputerModel {
  computerId:number;
  computerName:string;
  serialNumber:string;
    model: string;
    lastUpdate:string;
  ipAddress: string;
  userName: string;
}

export interface IComputerFullModel {
    computerId: number;
    bios:string;
    bootTime: string;
    computerName: string;
    cdromDrive: string;
    diskDrive: string;
    ipAddress: string;
    lastUpdate: string;
    logicalDisk:string;
    macAddress: string;
    model: string;
    networkAdapter:string;
    operatingSystem:string;
  parallelPort: string;
    physicalMemory: string;
    pointingDevice: string;
    printer:string;
  processor: string;
  serialNumber: string;
    serialPort: string;
    share:string;
    soundDevice: string;
    userAccount:string;
  userName: string;
  videoController: string;
  
}


export class ComputerModel implements IComputerModel
{
  computerId:number;
  computerName:string;
  serialNumber:string;
  model:string;
  lastUpdate:string;
  ipAddress: string;
  userName: string;

  constructor (computerId:number,
  computerName:string,
  serialNumber:string,
  model:string,
  lastUpdate:string,
  ipAddress: string,
  userName: string)
  {
    this.computerId=computerId;
    this.computerName=computerName;
    this.serialNumber=serialNumber;
    this.model=model;
    this.lastUpdate=lastUpdate;
    this.ipAddress = ipAddress;
    this.userName = userName;
  }
}

export class ComputerFullModel implements IComputerFullModel
{
  computerId:number;
    bios: string;
    bootTime: string;
    computerName: string;
    cdromDrive: string;
    diskDrive: string;
    ipAddress: string;
    lastUpdate: string;
    logicalDisk: string;
    macAddress: string;
    model: string;
    networkAdapter:string;
    operatingSystem: string;
    parallelPort: string;
    physicalMemory: string;
    pointingDevice: string;
    printer: string;
    processor: string;
    serialNumber: string;
    serialPort: string;
    share: string;
    soundDevice: string;
    userAccount: string;
    userName: string;
    videoController: string;
    
  constructor (computerId?:number,
        bios?: string,
    bootTime?: string,
    computerName?: string,
    cdromDrive?: string,
    diskDrive?: string,
    ipAddress?: string,
    lastUpdate?: string,
    logicalDisk?: string,
    macAddress?: string,
      model?: string,
      networkAdapter?:string,
    operatingSystem?: string,
    parallelPort?: string,
    physicalMemory?: string,
    pointingDevice?: string,
    printer?: string,
    processor?: string,
    serialNumber?: string,
    serialPort?: string,
    share?: string,
    soundDevice?: string,
    userAccount?: string,
    userName?: string,
    videoController?: string)
  {
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

   

}
