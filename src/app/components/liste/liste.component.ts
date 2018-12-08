import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Article} from '../../article';
import {Panier} from '../../panier';
import {PanierService} from '../../shared_service/panier.service';
import {ArticleService} from '../../shared_service/article.service';
import {NotificationService} from '../../shared_service/notification.service';
@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  private article: Article;
  private articles: Article[];
  private panier: Panier;
  private nom:string;


  constructor(private _articleService: ArticleService, private _panierService: PanierService, private _rotuer: Router, private _notificationService: NotificationService) {

  }
  deconnexion(){
    localStorage.clear();
    this._rotuer.navigate(['../login']);


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
    this.nom = JSON.parse(localStorage.getItem("user")).nom;
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



    if(data.qte_article > 0){
      let x =data.qte_article;
      x--;
      data.qte_article = x;
     this._panierService.updateByQuantity(data.id).subscribe((article)=> {
     })
     this.panier = new Panier();
     this.panier.nom_article = data.nom_article;
     this.panier.prix_article=data.prix_article;
     this.panier.prix_article = data.prix_article;
     this.panier.idclient = JSON.parse(localStorage.getItem("user")).id;
     this.panier.totale = 0;
     this._panierService.createPanier(this.panier).subscribe();
   }

   else {
     const notification = { message : "l'article "+data.nom_article+" a subit une rupture de stock"};
     this._notificationService.createArticle(notification).subscribe((data) => console.log(data));
   }
  }




}
