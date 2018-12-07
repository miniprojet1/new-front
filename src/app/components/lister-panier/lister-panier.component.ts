import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../shared_service/article.service';
import {Router} from '@angular/router';
import {PanierService} from '../../shared_service/panier.service';
import {Article} from '../../article';
import {Panier} from '../../panier';

@Component({
  selector: 'app-lister-panier',
  templateUrl: './lister-panier.component.html',
  styleUrls: ['./lister-panier.component.css']
})
export class ListerPanierComponent implements OnInit {
  private paniers:Panier[];
  private totale :number = 0;
  constructor(private _panierService:PanierService,private _router:Router) {

    this._panierService.getPanier().subscribe((paniers)=>{
        console.log(paniers);
        this.paniers=paniers;
        for (let p of paniers){
          this.totale = this.totale+p.prix_article;
        }
      },(error)=>{
        console.log(error);
      }
    )
  }

  ngOnInit() {


  }

}
