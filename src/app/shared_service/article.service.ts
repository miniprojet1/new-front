import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';



import { map } from 'rxjs/operators';
import { Article } from '../article';

import {Login} from '../login';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {
  private baseUrl:string='http://localhost:8080';
  private headers = new Headers({'Content-Type':'application/json'}) ;
  private options=new RequestOptions({headers:this.headers})

private article= new Article();
  constructor(private _http:Http) { }

  getArticle(){
    return this._http.get(this.baseUrl+'/Article',this.options).pipe(map((response:Response)=>response.json()))
  
  
   
  }
  deleteArticle(id:Number){
    return this._http.delete(this.baseUrl+'/Article/'+id,this.options).pipe(map((response:Response)=>response.json()));
   
  }
createArticle(article:Article){
    return this._http.post(this.baseUrl+'/Article',JSON.stringify(article), this.options).pipe(map((response:Response)=>response.json()));
   
  }
  updateArticle(article:Article){
    return this._http.put(this.baseUrl+'/Article',JSON.stringify(article), this.options).pipe(map((response:Response)=>response.json()));
   
  }
    setter(article:Article){
      this.article=article;
    }
  getter(){
    return this.article;
  }

  login(login :String , password : String){
    return this._http.get(this.baseUrl+'/commissioner/'+login+'/'+password).pipe(map((response:Response)=>response.json()));
  }
}

