import { Injectable }    from '@angular/core';
//import { Headers, Http, Response } from '@angular/common/http';

import { IMonitorModel } from '../../model/monitor/monitor.model';
import { HttpClient } from '@angular/common/http';

//import 'rxjs/add/operator/toPromise';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';



@Injectable()
export class MonitorService
{
  private dataUrl="api/Monitor";

  constructor(private http:HttpClient) {}

  getData() {
      return this.http.get<IMonitorModel[]>(this.dataUrl);
      //.toPromise()
      //.then((response:Response)=>response.json() as IMonitorModel[]) //edited by me
      //.catch(this.handleError);
  }

  /*private handleError(error: any): Promise<any> {
    //console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
}*/
}
