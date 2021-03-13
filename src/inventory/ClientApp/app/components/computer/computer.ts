import {Component, OnInit, Input, OnDestroy, ViewChild, AfterViewInit, Inject} from '@angular/core';

//import { Observable } from 'rxjs/Observable';
//import { Mat }
import { Subscription } from 'rxjs';

import { ComputerService } from '../../shared/service/computer/computer.service';
import { ServiceService } from '../../shared/service/service/service.service';
import { ProductService } from '../../shared/service/product/product.service';
import { PrinterService } from '../../shared/service/printer/printer.service';
//import { ComputerGetterService } from '../../shared/service/computer/computer.getter/computer.getter.service'


import {IComputerModel, ComputerFullModel, ComputerModel} from '../../shared/model/computer/computer.model';
import { IServiceModel } from '../../shared/model/service/service.model';
import { IProductModel } from '../../shared/model/product/product.model';
import { IPrinterModel } from '../../shared/model/printer/printer.model';

//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/debounceTime';
//import 'rxjs/add/operator/distinctUntilChanged';
//import 'rxjs/add/operator/mergeMap';
//import 'rxjs/add/observable/from';

//import { map } from 'rxjs';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {transcode} from "buffer";



/////////////////// Modal window \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
@Component({
  selector: 'modal-content',
  templateUrl: "computer.modal.html", //./app/components/computer/
  providers: [ComputerService]
})
export class ComputerModalContent implements OnDestroy
{
  //@Input() computerItem:any;
//    computerFullModel: ComputerFullModel;
    subscription: Subscription;
    dataColumns=['computerName','serialNumber', 'bios',  'model','operatingSystem','physicalMemory','processor','diskDrive','videoController',
        'serialPort','networkAdapter','cdromDrive','soundDevice','parallelPort','userName','userAccount','share',
        'logicalDisk','ipAddress','macAddress','bootupTime','lastUpdate'];
    displayedColumns=[];
    labels=['Имя компьютера','Серийный номер', 'BIOS','Модель','ОС','Память (ОЗУ)','Процессор','HDD','Видеоконтроллер',
        'СОМ порт','Сетевая карта','CD-ROM','Звуковая карта','Параллельный порт','Имя пользователя','Пользователи','Общие ресурсы',
        'Логические диски','IP адрес','MAC адрес','Время загрузки','Последнее обновление'];
    dataSource:MatTableDataSource<any>;
    dataRaw:ComputerFullModel[];
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    computerName:string;

    constructor(public dialogRef: MatDialogRef<ComputerPaginationComponent>,
        private computerService: ComputerService, @Inject(MAT_DIALOG_DATA) public data: {computerId:number}) {
        this.Load();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    private Load() {
        console.log('LOad started');
        //.computerGetterService.ComputerId
        this.subscription=this.computerService.getFullData(this.data.computerId).subscribe(m => {
            //this.dataSource.data = m;
            this.dataRaw = m;
            console.log("Constructor ********************************");
            console.log("m[0] computerName=" + m[0].computerName);
            console.log("computerFullModel computerName=" + this.dataRaw);
            this.computerName=m[0].computerName;
            this.transpose();
            this.fillLabels();

        });  //editet by me
    }

    transpose(){
        console.log('transpose started');
        let transposedData=[];
        for (let column=0; column<this.dataColumns.length;column++) {
            transposedData[column]={
                label:this.labels[column] };
            console.log('this.dataRaw.length='+this.dataRaw.length);
            for (let row=0; row<this.dataRaw.length; row++) {
                transposedData[column][`column${row}`]=this.dataRaw[row][this.dataColumns[column]];
            }
        }
        this.dataSource=new MatTableDataSource(transposedData);
    }

    fillLabels(){
        console.log('fillLabels started');
        this.displayedColumns=['label'];
        for(let i=0; i<this.dataRaw.length; i++){
            this.displayedColumns.push('column'+i);
        }
    }

    close(){
        this.dialogRef.close(null);
    }
    

}

/////// Service modal window \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
@Component(
    {
        selector: 'modall-content',
        templateUrl: 'service.modal.html',
        providers:[ServiceService]
    })
export class ServiceModalContent implements OnDestroy, AfterViewInit {
    //@Input() computerItem: any;
    serviceModel: IServiceModel[];
    computerName: string;
    subscription: Subscription;
    dataSource:MatTableDataSource<IServiceModel>;
    @ViewChild(MatSort) sort: MatSort;
    //@ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(public dialogRef: MatDialogRef<ComputerPaginationComponent>,
        private serviceService: ServiceService,
                @Inject(MAT_DIALOG_DATA) public data: {computerId:number, computerName:string}) {
        this.dataSource=new MatTableDataSource<IServiceModel>();
        this.computerName = this.data.computerName;
        this.subscription = this.serviceService.getService(this.data.computerId).subscribe(m => {
            this.dataSource.data = m;
        });
    }
    
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        //this.dataSource.paginator = this.paginator;
    }
    close(){
        this.dialogRef.close(null);
    }

    doFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}


/////// Printer modal window \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
@Component(
    {
        selector: 'modalpr-content',
        templateUrl: 'printer.modal.html',
        providers: [PrinterService]
    })
export class PrinterModalContent implements OnDestroy, AfterViewInit {
    //@Input() computerItem: any;
    //printerModel: IPrinterModel[];
    computerName: string;
    subscription: Subscription;
    dataSource:MatTableDataSource<IPrinterModel>;
    @ViewChild(MatSort) sort: MatSort;

    constructor(public dialogRef: MatDialogRef<ComputerPaginationComponent>,
        //private computerGetterService: ComputerGetterService,
        private printerService: PrinterService,
                @Inject(MAT_DIALOG_DATA) public data: {computerId:number, computerName:string}) {
        //this.serviceModel = new ServiceModel();
        this.dataSource=new MatTableDataSource<IPrinterModel>();
        this.computerName = this.data.computerName;
        this.subscription = this.printerService.getPrinter(this.data.computerId).subscribe(m => {
            this.dataSource.data = m;
        });
    }

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    close(){
        this.dialogRef.close(null);
    }

    doFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}


/////////////////////////   Computer table \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

@Component({
     selector: 'computer-pagination',
     templateUrl: 'computer.html'

})
export class ComputerPaginationComponent implements OnInit, AfterViewInit
{
  model:string;
  dataSource:MatTableDataSource<ComputerModel>;
    displayedColumns = ['computerId','model','serialNumber', 'computerName','userName', 'ipAddress','lastUpdate', 'actions','printers','services','products'];
    computer: ComputerModel;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;


/////   Constructor \\\\\\\\\
    constructor(private computerService: ComputerService,
         private computerModalService: MatDialog, private serviceService: ServiceService,
        private serviceModalService: MatDialog, private productModalService: MatDialog, private printerModalService: MatDialog)
  {
    this.dataSource=new MatTableDataSource<ComputerModel>();
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


    refresh(){
        this.buildForm();
    }

    private buildForm() {
        this.computerService.getData().subscribe(t=> {
            //this.computerModel = t.map(m => m);
            this.dataSource.data = t; // .map(m => m.js); //      t as IComputerModel[];
        });
    }


///// Событие при нажатии кнопки Подробнее
    public onDetail(computerId: string) {
        const dialogRef = this.computerModalService.open(ComputerModalContent, {
            panelClass: 'mat-dialog-md',
            data: {computerId: computerId}
        });
    }



    doFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    onService(computerId: string, computerName:string) {
        const dialogRef = this.printerModalService.open(ServiceModalContent, {
            panelClass: 'mat-dialog-md',
            data: {computerId: computerId, computerName: computerName}
        });
    }

    onProduct(computerId: string, computerName:string) {
        const dialogRef = this.productModalService.open(ProductModalContent, {
            panelClass: 'mat-dialog-md',
            data: {computerId: computerId, computerName: computerName}
        });
    }

    onPrinter(computerId: string, computerName:string) {
        const dialogRef = this.printerModalService.open(PrinterModalContent, {
            panelClass: 'mat-dialog-md',
            data: {computerId: computerId, computerName: computerName}
        });
    }

}

/////// Product modal window \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

@Component(
    {
        selector: 'modalp-content',
        templateUrl: 'product.modal.html',
        providers: [ProductService]
    })
export class ProductModalContent implements OnDestroy,AfterViewInit {
    //@Input() computerItem: any;
    //productModel: IProductModel[];
    computerName:string;
    subscription: Subscription;
    dataSource:MatTableDataSource<IProductModel>;
    @ViewChild(MatSort) sort: MatSort;

    constructor(public dialogRef: MatDialogRef<ComputerPaginationComponent>,
                private productService: ProductService,
                @Inject(MAT_DIALOG_DATA) public data: {computerId:number, computerName:string}) {
        //this.serviceModel = new ServiceModel();
        this.dataSource=new MatTableDataSource<IProductModel>();
        this.computerName = this.data.computerName;
        this.subscription = this.productService.getProduct(this.data.computerId).subscribe(m => {
            this.dataSource.data = m;
        });
    }

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    close(){
        this.dialogRef.close(null);
    }

    doFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}

