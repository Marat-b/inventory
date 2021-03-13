import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IPrinterModel } from "../../model/printer/printer.model";

@Injectable()
export class PrinterService {
    private dataUrl = "api/Printer";
    constructor(private http: HttpClient) { }


    getPrinter(item) {
        return this.http.get<IPrinterModel[]>(this.dataUrl + "/" + item);
    }
}
