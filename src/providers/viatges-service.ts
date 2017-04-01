import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ViatgesService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ViatgesService {
  baseUrl: String;
  constructor(public http: Http) {
    this.baseUrl = "http://busmanresa-api.herokuapp.com/viatges?"
  }

  getViatges(origen, desti, dia){
    return this.http.get(this.baseUrl+"origen="+origen+"&desti="+desti+"&dia="+dia).map(res=>res.json());
  }

}
