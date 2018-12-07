import { Injectable } from '@angular/core';

import { Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';


import { map } from 'rxjs/operators';
import { Panier } from '../panier';
import {Article} from '../article';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private baseUrl:string='http://localhost:8080';
  private header =new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.header});
  private panier= new Panier();
  constructor(private _http:Http) { }
  getPanier(){
    return this._http.get(this.baseUrl+'/Panier/'+JSON.parse(localStorage.getItem("user")).id,this.options).pipe(map((response:Response)=>response.json()));
  }
  deletePanier(id:Number){
    return this._http.delete(this.baseUrl+'/Panier/'+id,this.options).pipe(map((response:Response)=>response.json()));

  }
  createPanier(panier:Panier){
    console.log(panier);
    return this._http.post(this.baseUrl+'/Panier',JSON.stringify(panier), this.options).pipe(map((response:Response)=>response.json()));

  }
  updatePanier(panier:Panier){
    return this._http.put(this.baseUrl+'/Panier',JSON.stringify(Panier), this.options).pipe(map((response:Response)=>response.json()));

  }

  updateByQuantity(id : Number){
    return this._http.get(this.baseUrl+'/Article/update/'+id,this.options).pipe(map((response:Response)=>response.json()));
  }

  getall(){

  }
  setter(panier:Panier){
    this.panier=panier;
  }
  getter(){
    return this.panier;
  }
}
