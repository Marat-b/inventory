import { Injectable } from '@angular/core';
import {EndpointListIpaddressService} from "./endpoint-list-ipaddress.service";
import {IListIpaddressModel} from "../../model/ipaddress/list-ipaddress.model";

@Injectable({
  providedIn: 'root'
})
export class ListIpAddressServiceService {

  constructor(private listEndpoint:EndpointListIpaddressService) { }
  public getList(id:number) {
    return this.listEndpoint.getListEndpoint<IListIpaddressModel[]>(id);
  }

}
