import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {IListIpaddressModel} from "../../shared/model/ipaddress/list-ipaddress.model";
import {ListIpAddressServiceService} from "../../shared/service/ipaddress/list-ip-address-service.service";

@Component({
  selector: 'app-list-ipaddress',
  templateUrl: './list-ipaddress.component.html',
  styleUrls: ['./list-ipaddress.component.scss']
})
export class ListIpaddressComponent implements OnInit, OnDestroy, AfterViewInit {
selectedId:number;
sub:any;
displayedColumns:string[]=['ipAddress','deviceName','macAddress','lastUpdate'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  listIp:IListIpaddressModel;
  dataSource:MatTableDataSource<IListIpaddressModel>;


  constructor(private route:ActivatedRoute,
              private listAddress:ListIpAddressServiceService) {
    this.dataSource=new MatTableDataSource<IListIpaddressModel>();
  }

  ngOnInit() {
   this.refreshing();
}

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  refresh(){
      this.refreshing();
  }

  private refreshing() {
      this.sub= this.route.params.subscribe(params=>{
          console.log('params ->'+params['rangeId']);
          this.selectedId=params['rangeId'];
          this.listAddress.getList(params['rangeId']).subscribe(res=>{
              this.dataSource.data=res;
          });
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
