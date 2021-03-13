import {EventEmitter, Injectable, OnDestroy, Output} from '@angular/core';
import {IRangeIpaddressModel} from "../../model/ipaddress/range-ipaddress.model";
import {RangeIpAddressServiceService} from "./range-ip-address-service.service";
import {Subject, Subscription} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class GetRangeIpaddressService implements OnDestroy{
  //@Output() range: EventEmitter<IRangeIpaddressModel[]>;
  //rangeIp:IRangeIpaddressModel[];
  sub:Subscription;
  private onRangeIp=new Subject<IRangeIpaddressModel[]>();
  rangeIp$=this.onRangeIp.asObservable();

  constructor(private rangeService:RangeIpAddressServiceService) {
    //this.range=new EventEmitter<IRangeIpaddressModel[]>();
    this.sub= this.rangeService.getRanges().subscribe(results=>{
      //this.rangeIp=results;

      this.onRangeIp.next(results);
    });

  }
  public makeRange(range: IRangeIpaddressModel[]) {
    console.log('makeRange ->'+ JSON.stringify(range));
    //this.range.emit(range);
    this.onRangeIp.next(range);
  }

  /*public initRange():IRangeIpaddressModel[] {
    /!*this.rangeIp=[{
      rangeId:3,
      startIpaddress:'1.1..1.1.11.',
      endIpaddress:'2.2.2..22.2.'
    }];*!/
    console.log('initRange rangeIp->'+this.rangeIp);
    return this.rangeIp;
  }*/

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
