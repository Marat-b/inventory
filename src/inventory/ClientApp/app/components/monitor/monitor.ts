import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

//import { Observable } from 'rxjs';

import { MonitorService } from '../../shared/service/monitor/monitor.service';
import {IMonitorModel, MonitorModel} from '../../shared/model/monitor/monitor.model';

/*
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/from';
*/
import { MatPaginator, MatSort, MatTableDataSource} from "@angular/material";


@Component({
     selector: 'monitor-pagination',
     templateUrl: 'monitor.html' //./app/components/monitor/

})
export class MonitorPaginationComponent implements OnInit, AfterViewInit
{
  monitorModel:IMonitorModel[];
  allItems:number;
  page:number=1;
  itemView:any;
  pageSize:number;
  search:any;
  currentPage:number;
  model:string;
  dataSource: MatTableDataSource<MonitorModel>;
  displayedColumns=['monitorId','model','serialNumber', 'computerName','lastUpdate'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


/////   Constructor \\\\\\\\\
  constructor(private monitorService:MonitorService)
  {
    /*this.monitorModel=[];
    this.pageSize=15;
    this.currentPage=1;*/
    this.dataSource=new MatTableDataSource<MonitorModel>();
  }

//// Инициализация при старте страницы
  ngOnInit(): void
  {
    //this.monitorModel=this.monitorService.getData();
    this.buildForm();
    }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  refresh(){
    this.buildForm();
  }

  private buildForm(){
    this.monitorService.getData().subscribe(t=> {
      //this.monitorModel = t.map(m => m);
      this.dataSource.data=t;
    });
  }
}
