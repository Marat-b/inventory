import {Injectable, Injector} from '@angular/core';
import {  HttpClient } from '@angular/common/http';

import {IComputerModel, IComputerFullModel, ComputerFullModel} from '../../model/computer/computer.model';
//import { environment } from "../../../environment";
import {EndpointFactory} from "../endpoint-factory.service";

import { Observable } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {error} from '@angular/compiler/src/util';
//import 'rxjs/add/operator/toPromise';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/filter';
//import 'rxjs/add/operator/mergeAll';
//import 'rxjs/add/operator/mergeMap';
//import { pipe } from 'rxjs/util/pipe';
//import {  filter, scan } from 'rxjs/operators';
//import { map } from 'rxjs/operators/map';
//import { tap } from 'rxjs/operators/tap';
//import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common'
//import Computermodel = require("../../model/computer/computer.model");

//import { flatMap } from 'rxjs/operators/flatMap';



@Injectable(
    )
export class ComputerService extends  EndpointFactory
{
    //private baseUrl = environment.baseUrl;
    private dataUrl =  "api/Computer";
  //private dataUrl2="api/Computer";

  constructor( http:HttpClient,injector:Injector) { super(http,injector)}
    //: Observable<IComputerModel[]>
    getData() {
        return this.http.get<IComputerModel[]>(this.dataUrl);/*.pipe(
            tap(t=>console.log("t="+t)),
            map(m => {return new IComputerModel (m.)})
        
        );*/ //<-- edited by me#1#

    }
//.catch(this.handleError);
//.then((response:Response)=>response.json() as IComputerModel[]) 

    getFullDataEndpoint<T>(searched:number): Observable<T> { //:Observable
        return this.http.get<T>(this.dataUrl + "/" + searched)
            .pipe<T>(
                catchError(error =>{
                    return this.handleError(error,()=>this.getFullData(searched));
            }));
            //    .map((response: Response) => response.json() as IComputerFullModel[])
            //.map(f=>f);// => response.json() as IComputerFullModel[]); //editet by me
        //.filter((r:IComputerFullModel)=>r.computerId===searched)
        //   .catch(this.handleError);
    }

    getFullData(id:number){
      return this.getFullDataEndpoint<ComputerFullModel[]>(id);
    }

  /*private handleError(error: any, continuation: () => Observable<any>) {
    //console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }*/
}
