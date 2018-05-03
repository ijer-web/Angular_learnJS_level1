import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { HttpService } from './http.service';
// import { BASE_URL_TOKEN } from '../../../config';


@Injectable()
export class ProductsService {

  public  constructor(
    @Inject('baseUrl') private _baseUrlTest: string[],
    private _http: HttpClient
    ) {
      console.log(this._baseUrlTest);
  }

  public getProducts(): Observable<Product[]> {
    return (this._http as HttpService)
      .customRequest('/products')
      .map((res: {data: Product[]}) => res.data);
  }
}
