import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';



import { map } from 'rxjs/operators';
import { Payement } from '../payement';


@Injectable({
  providedIn: 'root'
})
export class PayementService {
  private baseUrl:string='http://localhost:8080';
  private headers = new Headers({'Content-Type':'application/json'}) ;
  private options=new RequestOptions({headers:this.headers})
private payement= new Payement();
  constructor(private _http:Http) { }

  getPayement(){
    return this._http.get(this.baseUrl+'/Payement',this.options).pipe(map((response:Response)=>response.json()))
  
  
   
  }
  deletePayement(id:Number){
    return this._http.delete(this.baseUrl+'/Payement/'+id,this.options).pipe(map((response:Response)=>response.json()));
   
  }
createPayement(payement:Payement){
    return this._http.post(this.baseUrl+'/Payement',JSON.stringify(payement), this.options).pipe(map((response:Response)=>response.json()));
   
  }
  updatePayement(payement:Payement){
    return this._http.put(this.baseUrl+'/Payement',JSON.stringify(payement), this.options).pipe(map((response:Response)=>response.json()));
   
  }
    setter(payement:Payement){
     this.payement=payement ;  }
  getter(){
    return this.payement;
  }
}