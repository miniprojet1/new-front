import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Article} from '../../article';
import {Panier} from '../../panier';
import {PanierService} from '../../shared_service/panier.service';
import {ArticleService} from '../../shared_service/article.service';
@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  private article: Article;
  private articles: Article[];
  private panier: Panier;

  constructor(private _articleService: ArticleService, private _panierService: PanierService, private _rotuer: Router) {
  }

  ngOnInit() {
    this.panier = this._panierService.getter();
    this.article = this._articleService.getter();
    this._articleService.getArticle().subscribe((articles) => {
        console.log(articles);
        this.articles = articles;
      }, (error) => {
        console.log(error);
      }
    );

  }

  ajout() {
    this._panierService.createPanier(this.panier).subscribe((panier) => {
      console.log(panier);
      this._rotuer.navigate(['/']);
    }, (error) => {
      console.log(error);
    });
  }

  ajouterPanier(data: Article) {
    this.panier = new Panier();
    this.panier.nom_article = data.nom_article;
    this.panier.prix_article=data.prix_article;
    this.panier.prix_article = data.prix_article;
    this.panier.totale = 0;
    this._panierService.createPanier(this.panier).subscribe();
    this._rotuer.navigate(['/listpanier']);
  }



}
