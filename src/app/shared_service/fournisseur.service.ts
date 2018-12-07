import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';



import { map } from 'rxjs/operators';
import { Fournisseur } from '../fournisseur';



@Injectable({
  providedIn: 'root'
})

export class FournisseurService {
  private baseUrl:string='http://localhost:8080';
  private headers = new Headers({'Content-Type':'application/json'}) ;
  private options=new RequestOptions({headers:this.headers})
private fournisseur= new Fournisseur();
  constructor(private _http:Http) { }

  getFournisseur(){
    return this._http.get(this.baseUrl+'/Fournisseur',this.options).pipe(map((response:Response)=>response.json()))
  
  
   
  }
  deleteFournisseur(id:Number){
    return this._http.delete(this.baseUrl+'/Fournisseur/'+id,this.options).pipe(map((response:Response)=>response.json()));
   
  }
createFournisseur(fournisseur:Fournisseur){
    return this._http.post(this.baseUrl+'/Fournisseur',JSON.stringify(fournisseur), this.options).pipe(map((response:Response)=>response.json()));
   
  }
  updateFournisseur(fournisseur:Fournisseur){
    return this._http.put(this.baseUrl+'/Fournisseur',JSON.stringify(fournisseur), this.options).pipe(map((response:Response)=>response.json()));
   
  }
    setter(fournisseur:Fournisseur){
      this.fournisseur=fournisseur;
    }
  getter(){
    return this.fournisseur;
  }
}
