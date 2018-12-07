import { Injectable } from '@angular/core';
import { Http, Response, Headers , RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';


import { map } from 'rxjs/operators';
import { Employe } from '../employe';
@Injectable({
  providedIn: 'root'
})
export class EmployeService {
private baseUrl:string='http://localhost:8080';
private header =new Headers({'Content-Type':'application/json'});
private options = new RequestOptions({headers:this.header});
private employe= new Employe();
  constructor(private _http:Http) { }
  getEmploye(){
return this._http.get(this.baseUrl+'/Employe',this.options).pipe(map((response:Response)=>response.json()))
  }
  deleteEmploye(id:Number){
    return this._http.delete(this.baseUrl+'/Employe/'+id,this.options).pipe(map((response:Response)=>response.json()));
   
  }
createEmploye(Employe:Employe){
    return this._http.post(this.baseUrl+'/Employe',JSON.stringify(Employe), this.options).pipe(map((response:Response)=>response.json()));
   
  }
  updateEmploye(Employe:Employe){
    return this._http.put(this.baseUrl+'/Employe',JSON.stringify(Employe), this.options).pipe(map((response:Response)=>response.json()));
   
  }
}
