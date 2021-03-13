export interface IRangeIpaddressModel {
    rangeId:number;
    startAddress: string;
    endAddress: string;
}

export class RangeIpaddressModel implements IRangeIpaddressModel
{
    rangeId:number;
    startAddress: string;
    endAddress: string;

    constructor (
                rangeId?:number,
                startAddress?: string,
                endAddress?: string
                )
    {
        this.rangeId=rangeId;
        this.startAddress=startAddress;
        this.endAddress=endAddress;
    }
}
