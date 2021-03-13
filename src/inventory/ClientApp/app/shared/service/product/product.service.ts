import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IProductModel } from "../../model/product/product.model";

@Injectable()
export class ProductService {
    private dataUrl = "api/Product";
    constructor(private http: HttpClient) { }


    getProduct(item) {
        return this.http.get<IProductModel[]>(this.dataUrl + "/" + item);
    }
}
