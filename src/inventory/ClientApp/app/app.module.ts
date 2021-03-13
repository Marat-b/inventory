import { NgModule, LOCALE_ID }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent }   from './app.component';
import { HttpClientModule }    from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

import { InventoryMaterialModule } from "./shared/Module/material.module";
//import { APP_BASE_HREF } from '@angular/common';

registerLocaleData(localeRu);

//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { DataDb } from './shared/data/app.data'
/*import { ComputerDataDb,ComputerFullDataDb } from './shared/data/computer/computer.data'*/

import { MonitorService } from './shared/service/monitor/monitor.service';
import { ComputerService } from './shared/service/computer/computer.service';
import { ServiceService } from './shared/service/service/service.service';
import { ProductService } from './shared/service/product/product.service';
import { PrinterService } from './shared/service/printer/printer.service';
import { ComputerGetterService } from './shared/service/computer/computer.getter/computer.getter.service'

import { MonitorPaginationComponent } from './components/monitor/monitor'
import { ComputerPaginationComponent, ComputerModalContent , ServiceModalContent, ProductModalContent, PrinterModalContent } from './components/computer/computer'
import { HomeComponent } from './components/home/home.component'
import {FlexLayoutModule} from "@angular/flex-layout";
import {EndpointFactory} from "./shared/service/endpoint-factory.service";
import {PageHeaderComponent} from "./shared/page-header.component";
import {
    RangeIpaddressComponent,
    RangeIpaddressDialogComponent
} from './components/range-ipaddress/range-ipaddress.component';
import { ListIpaddressComponent } from './components/list-ipaddress/list-ipaddress.component';

@NgModule({
    imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule,
        FormsModule, InventoryMaterialModule,
        RouterModule.forRoot([
            {path: '', component: HomeComponent},
            {path: 'computer', component: ComputerPaginationComponent},
            {path: 'monitor', component: MonitorPaginationComponent},
            {path: 'range-ipaddress', component: RangeIpaddressComponent},
            {path: 'list-ipaddress/:rangeId', component:ListIpaddressComponent}
        ]), FlexLayoutModule, ReactiveFormsModule
    ],
    declarations: [AppComponent, PageHeaderComponent,
        MonitorPaginationComponent, ComputerPaginationComponent,
        HomeComponent,
        ComputerModalContent, ServiceModalContent, ProductModalContent, PrinterModalContent,  RangeIpaddressComponent,
        RangeIpaddressDialogComponent,
        ListIpaddressComponent],
    providers: [
        { provide: 'BASE_URL', useFactory: getBaseUrl },
        MonitorService, ComputerService, ComputerGetterService,
        ServiceService, ProductService, EndpointFactory,
        PrinterService,{ provide: LOCALE_ID, useValue: "ru" }/*, { provide: APP_BASE_HREF, useValue: '/inventory' }*/],
  bootstrap:    [ AppComponent ],
    entryComponents: [ComputerModalContent , ServiceModalContent, ProductModalContent, PrinterModalContent,
        RangeIpaddressDialogComponent]
})
export class AppModule { }


export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}

