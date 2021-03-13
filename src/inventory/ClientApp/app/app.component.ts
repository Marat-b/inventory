import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router} from "@angular/router";
import {GetRangeIpaddressService} from "./shared/service/ipaddress/get-range-ipaddress.service";
import {IRangeIpaddressModel} from "./shared/model/ipaddress/range-ipaddress.model";
import {Subscription} from "rxjs";
import {RangeIpAddressServiceService} from "./shared/service/ipaddress/range-ip-address-service.service";
import {FormControl} from "@angular/forms";
import {getBaseUrl} from "./app.module";


//import { MediaMatcher } from '@angular/cdk/layout';
//import {  MatExpansionPanel, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';



@Component({
  selector: 'my-app',
  templateUrl: './inventory.component.html', //./app/
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  rangeIpaddress:IRangeIpaddressModel[];
  sub:Subscription;
  //mode:any;
  //$route:Observable<string>;

  constructor( public router:Router,
              private rangeService: RangeIpAddressServiceService,
              private rangeGetService: GetRangeIpaddressService){
    console.log('getBaseUrl() -> '+getBaseUrl() );
  }

  ngOnInit() {
    /*this.sub= this.rangeService.getRanges().subscribe(s=>{
      console.log("AppComponent - ngOnInit - s ->"+s);
      this.rangeIpaddress=s;
    });*/
    //this.rangeIpaddress=this.rangeGetService.initRange();
    //this.mode= new FormControl('side');
    this.sub= this.rangeGetService.rangeIp$.subscribe(res=>{
      this.rangeIpaddress=res;
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  /*private makeRange(rangeIp: IRangeIpaddressModel[]) {
    this.rangeGetService.makeRange(rangeIp);
  }*/
}
