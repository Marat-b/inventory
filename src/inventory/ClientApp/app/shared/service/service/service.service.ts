import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IServiceModel } from "../../model/service/service.model";

@Injectable()
export class ServiceService {
    private dataUrl = "api/Service";
    constructor(private http: HttpClient) { }


    getService(item) {
        return this.http.get<IServiceModel[]>(this.dataUrl + "/" + item);
    }
}
