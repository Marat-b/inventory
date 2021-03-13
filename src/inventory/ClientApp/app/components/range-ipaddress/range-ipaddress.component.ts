import {AfterViewInit, Component, Inject, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
  MatPaginator,
  MatSnackBar,
  MatSort,
  MatTableDataSource
} from "@angular/material";
import {IRangeIpaddressModel, RangeIpaddressModel} from "../../shared/model/ipaddress/range-ipaddress.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {GetRangeIpaddressService} from "../../shared/service/ipaddress/get-range-ipaddress.service";
import {Subscription} from "rxjs";
import {RangeIpAddressServiceService} from "../../shared/service/ipaddress/range-ip-address-service.service";

@Component({
  selector: 'app-range-ipaddress',
  templateUrl: './range-ipaddress.component.html',
  styleUrls: ['./range-ipaddress.component.scss']
})
export class RangeIpaddressComponent implements OnInit, AfterViewInit,OnDestroy {
  dataSource:MatTableDataSource<IRangeIpaddressModel>;
  rangeIp:IRangeIpaddressModel;
  sub:Subscription;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private ipRangeDialog:MatDialog,
              private snackBar: MatSnackBar,
              private rangeGetService:GetRangeIpaddressService,
              private rangeService: RangeIpAddressServiceService) {
    this.dataSource=new MatTableDataSource<IRangeIpaddressModel>();

  }

  ngOnInit() {
    //this.dataSource.data=[{'rangeId':1, 'startIpaddress':'1','endIpaddress':'2'},{'rangeId':2,'startIpaddress':'3','endIpaddress':'4'}]
    this.sub=this.rangeService.getRanges().subscribe(results=>{
      this.dataSource.data=results;
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }



  public editIpaddress(id?:number){
    console.log('RangeID='+id);
    if (id != undefined) {
      this.rangeIp = this.dataSource.data.filter(f => f.rangeId == id).shift();
      console.log('Start IP address = ' + this.rangeIp.startAddress);
    }
    else {
      this.rangeIp=new class implements IRangeIpaddressModel {
        endAddress: string;
        rangeId: number;
        startAddress: string;
      }
    }
    const dialogRef= this.ipRangeDialog.open(RangeIpaddressDialogComponent,{
      panelClass:'mat-dialog-sd',
      data: {rangeIp:this.rangeIp}
    });
    dialogRef.afterClosed().subscribe(s=>{
      console.log(s);
      if (s!=undefined) {
        console.log('startAddress ->' + s.value.startAddress);
        console.log('rangeId ->' + s.value.rangeId);

        /*this.rangeIp.startAddress = s.value.startAddress;
        this.rangeIp.endAddress = s.value.endAddress;
        if (id == undefined) {
          this.dataSource.data.push({
            rangeId: 0,
            startAddress: s.value.startAddress,
            endAddress: s.value.endAddress
          });
          this.dataSource.filter=this.dataSource.filter;
        }*/
        this.Save(id,s.value.startAddress,s.value.endAddress);
        /*this.dataSource.filter=this.dataSource.filter;
        this.rangeGetService.makeRange(this.dataSource.data);*/
      }

    })
  }

  private Save(id:any, startAddress:string, endAddress:string){
    let range:IRangeIpaddressModel =new class implements IRangeIpaddressModel {
      rangeId: number;
      startAddress: string;
      endAddress: string;
    };
    if (id==undefined)
      range.rangeId=0;
    else
      range.rangeId=id;
    range.startAddress=startAddress;
    range.endAddress=endAddress;
    if (range.rangeId>0) {
      this.rangeService.updateRange(range).subscribe(res=>{
        this.dataSource.data=this.dataSource.data.map(m=>{
          console.log('m - >'+m.rangeId.toString()+ ' '+m.startAddress.toString());
          if (m.rangeId==range.rangeId)
            return {rangeId:m.rangeId,startAddress:range.startAddress,endAddress:range.endAddress};
          else
            return m;
        });
        //this.dataSource.filter=this.dataSource.filter;
        //this.dataSource.data=this.dataSource.data.filter(item=>{item===range});
        this.rangeGetService.makeRange(this.dataSource.data);
      });
    }
    else {
      this.rangeService.newRange(range).subscribe(res=>{
        this.dataSource.data.push(res);
        this.dataSource.filter=this.dataSource.filter;
        //this.dataSource.data=this.dataSource.data.filter(item=>{item===item});
        this.rangeGetService.makeRange(this.dataSource.data);
      });
    }
  }

  public deleteIpaddress(range:RangeIpaddressModel){
    this.snackBar.open(`Удалить ${range.startAddress} - ${range.endAddress} ?`,'Удалить',{duration:10000}).onAction().subscribe(()=>{
    this.rangeService.deleteRange(range.rangeId).subscribe(results=>{
      this.dataSource.data=this.dataSource.data.filter(item=>item!==range);
      this.rangeGetService.makeRange(this.dataSource.data);
    })});
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
//////////////////////// Modal Dialog \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
@Component({
  selector: 'app-iprange-dialog',
  templateUrl: './range-ipaddress-dialog.component.html'
})
export class RangeIpaddressDialogComponent /*implements OnChanges*/ {
  rangeId:number;
  rangeIp:IRangeIpaddressModel;
  rangeForm:FormGroup;

  constructor(private formBuilder:FormBuilder,
              public dialogRef:MatDialogRef<RangeIpaddressComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {rangeIp:IRangeIpaddressModel}){
    //this.rangeIp=this.data.rangeIp;
    this.rangeForm=formBuilder.group({
      startAddress: this.data.rangeIp.startAddress ,
      endAddress: this.data.rangeIp.endAddress
    })
    /*this.rangeForm.reset({
      startIpaddress: this.rangeIp.startIpaddress || '',
      endIpaddress: this.rangeIp.endIpaddress || ''
    });*/
  }

  /*ngOnChanges(): void {
    this.rangeForm.reset({
      startIpipaddress:'6',
      endIpaddress:'7'
    });

    this.rangeIp.startIpaddress='8';
  }*/

  public cancel(){
    this.dialogRef.close(null);
  }

  /*public submit()
  {
    /!*this.rangeForm.reset({
      startIpipaddress:'6',
      endIpaddress:'7'
    });
    this.rangeIp.startIpaddress='8';*!/
    console.log("onSubmit -> " + this.rangeForm);
    console.log('onSubmit ->'+this.data.rangeIp.startIpaddress+ ' '+this.data.rangeIp.endIpaddress);
  }*/
}
