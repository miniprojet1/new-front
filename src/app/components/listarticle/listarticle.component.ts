import { Component, OnInit } from '@angular/core';
import{ArticleService} from '../../shared_service/article.service';
import{Article } from '../../article';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listarticle',
  templateUrl: './listarticle.component.html',
  styleUrls: ['./listarticle.component.css']
})
export class Listarticlecomponent implements OnInit {
private articles:Article[];

  constructor(private _articleService:ArticleService,private _router:Router) {
    if(!localStorage.getItem("user")){
      this._router.navigate(['../login']);

    }
    else {
      let user = JSON.parse(localStorage.getItem("user"));
      if(user.role !== "admin"){
        this._router.navigate(['../liste']);
      }
    }

  }

  ngOnInit() { 
    this._articleService.getArticle().subscribe((articles)=>{
      console.log(articles);
      this.articles=articles;
    },(error)=>{
      console.log(error);
    }
    )
    
  }
  deleteArticle(article){
    this._articleService.deleteArticle(article.id).subscribe((data)=>{
      this.articles.splice(this.articles.indexOf(article),1);
    }
  
    )


}

updateArticle(article){  
  this._articleService.setter(article);
  this._router.navigate(['/ajoutarticle']);

}
createArticle(){
  let article =new Article();
  this._articleService.setter(article);
  this._router.navigate(['/ajoutarticle']);

}
  
}
