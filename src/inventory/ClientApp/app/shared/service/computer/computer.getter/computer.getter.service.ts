import { Injectable }    from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable()
export class ComputerGetterService{

     //private itemId = new Subject<number>();
     //itemIdO=this.itemId.asObservable();
    computerId: number;
    computerName:string;

     constructor()
     {
         this.computerId = 0;
         this.computerName = "";
     }
     get ComputerId():number {
          //console.log('get this.itemId='+this.computerId);
          return this.computerId;
     }
     set ComputerId(value:number){
          this.computerId=value;
          //console.log('set this.computerId='+this.computerId);
    }

    get ComputerName(): string {
        return this.computerName;
    }
    set ComputerName(value: string) {
        this.computerName = value;
    }


}
