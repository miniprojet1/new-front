import { Http,Response,Headers,RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';
import {Article} from '../article';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private baseUrl:string='http://localhost:8080';
  private headers = new Headers({'Content-Type':'application/json'}) ;
  private options=new RequestOptions({headers:this.headers})
  constructor(private _http:Http) {

  }



  createArticle(notification:any){
    return this._http.post(this.baseUrl+'/Notification',JSON.stringify(notification), this.options).pipe(map((response:Response)=>response.json()));
  }

  findBySeen(seen : any){
    return this._http.get(this.baseUrl+'/Notification/'+seen, this.options).pipe(map((response:Response)=>response.json()));
  }

  updateNotification(notfications : any[]){
    return this._http.post(this.baseUrl+'/Notification/update',JSON.stringify(notfications), this.options).pipe(map((response:Response)=>response.json()));
  }
}
