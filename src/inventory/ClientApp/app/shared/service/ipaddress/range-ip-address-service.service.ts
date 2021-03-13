import { Injectable } from '@angular/core';
import {EndpointRangeIpAddressServiceService} from "./endpoint-range-ip-address-service.service";
import {RangeIpaddressModel} from "../../model/ipaddress/range-ipaddress.model";

@Injectable({
  providedIn: 'root'
})
export class RangeIpAddressServiceService {

  constructor(private rangeEndpoint:EndpointRangeIpAddressServiceService ) { }

  getRanges(page?:number,pageSize?:number){
    return this.rangeEndpoint.getRangesEndpoint<RangeIpaddressModel[]>(page,pageSize);
  }

  updateRange(range:RangeIpaddressModel){
    if(range.rangeId!=undefined)
      return this.rangeEndpoint.getUpdateRangeEndpoint(range, range.rangeId);
  }

  newRange(range:RangeIpaddressModel) {
    return this.rangeEndpoint.getNewRangeEndpoint<RangeIpaddressModel>(range);
  }

  deleteRange(id:number) {
    return this.rangeEndpoint.getDeleteRangeEndpoint(id);
  }
}
