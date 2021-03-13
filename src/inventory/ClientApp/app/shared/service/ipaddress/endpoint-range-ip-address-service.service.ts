import {Injectable, Injector} from '@angular/core';
import {EndpointFactory} from "../endpoint-factory.service";
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EndpointRangeIpAddressServiceService extends EndpointFactory{
  private readonly _rangesUrl:string='api/rangeAddress/ranges';
  private readonly _rangeUrl:string='api/rangeAddress/range';

  get rangesUrl() {return this._rangesUrl};
  get rangeUrl() {return this._rangeUrl};

  constructor(http: HttpClient,  injector: Injector) {
    super(http, injector);
  }

getRangesEndpoint<T>(page?: number, pageSize?: number): Observable<T> {
  let endpointUrl = page && pageSize ? `${this.rangesUrl}/${page}/${pageSize}` : this.rangesUrl;
  console.log("endpointUrl=" + endpointUrl);

  return this.http.get<T>(endpointUrl, this.getRequestHeaders()).pipe<T>(
      catchError(error => {
        return this.handleError(error, () => this.getRangesEndpoint(page, pageSize));
      }));
}
getUpdateRangeEndpoint<T>(rangeObject:any, rangeId:number){
  let endpointUrl=`${this.rangeUrl}/${rangeId}`;
  console.log("getUpdateRangeEndpoint -- endpointUrl="+endpointUrl);
  console.log("getUpdateRangeEndpoint -- loyaltyObject="+JSON.stringify(rangeObject));
  return this.http.put<T>(endpointUrl,JSON.stringify(rangeObject),this.getRequestHeaders())
      .pipe<T>(
          catchError(error=>{ return this.handleError(error ,()=>this.getUpdateRangeEndpoint(rangeObject, rangeId));})
      );
}

  getRangeEndpoint<T>(rangeId:number):Observable<T>{
    let endpointUrl=`${this.rangeUrl}/${rangeId}`;

    return this.http.get<T>(endpointUrl, this.getRequestHeaders()).pipe<T>(
        catchError(error => {
          return this.handleError(error, () => this.getRangeEndpoint(rangeId));
        }));
  }

  getNewRangeEndpoint<T>(rangeObject:any):Observable<T>
  {
    let endpointUrl=`${this.rangeUrl}`;
    console.log("getNewRangeEndpoint -- endpointUrl="+endpointUrl);
    console.log("getNewRangeEndpoint -- rangeObject="+JSON.stringify(rangeObject));
    return this.http.post<T>(endpointUrl,JSON.stringify(rangeObject),this.getRequestHeaders())
        .pipe<T>(
            catchError(error=>{ return this.handleError(error ,()=>this.getNewRangeEndpoint(rangeObject));})
        );
  }

  getDeleteRangeEndpoint<T>(rangeId: number): Observable<T> {
    let endpointUrl = `${this.rangeUrl}/${rangeId}`;
    return this.http.delete<T>(endpointUrl, this.getRequestHeaders()).pipe<T>(
        catchError(error => {
          return this.handleError(error, () => this.getDeleteRangeEndpoint(rangeId));
        }));
  }

}
