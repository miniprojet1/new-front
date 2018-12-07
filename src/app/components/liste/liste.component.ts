import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Article} from '../../article';

import {ArticleService} from '../../shared_service/article.service';
@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  private article: Article;
  private articles: Article[] ;


  constructor( private _articleService: ArticleService, private _rotuer : Router) { }

  ngOnInit() {
    this.article = this._articleService.getter();
    this._articleService.getArticle().subscribe((articles) => {
        console.log(articles);
        this.articles = articles;
      }, (error) => {
        console.log(error);
      }
    ) ;

  }


}
