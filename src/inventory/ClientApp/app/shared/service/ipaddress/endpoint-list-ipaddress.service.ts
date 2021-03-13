import {Injectable, Injector} from '@angular/core';
import {EndpointFactory} from "../endpoint-factory.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EndpointListIpaddressService extends EndpointFactory {
  private readonly _listUrl:string='api/listAddress/list';
  get listUrl() {return this._listUrl};

  constructor(http: HttpClient,  injector: Injector) {
    super(http, injector);  }

  getListEndpoint<T>(id: number): Observable<T> {
    let endpointUrl = `${this.listUrl}/${id}` ;
    console.log("endpointUrl=" + endpointUrl);

    return this.http.get<T>(endpointUrl, this.getRequestHeaders()).pipe<T>(
        catchError(error => {
          return this.handleError(error, () => this.getListEndpoint(id));
        }));
  }
}
