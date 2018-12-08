import { Component, OnInit } from '@angular/core';
import {Article}from'../../article';
import {Router} from '@angular/router';
import{ArticleService} from '../../shared_service/article.service';
import{FournisseurService} from '../../shared_service/fournisseur.service';
import {Fournisseur}from'../../fournisseur';
import {FormBuilder,Validators,FormGroup, Validator} from '@angular/forms';

@Component({
  selector: 'app-from-art',
  templateUrl: './from-art.component.html',
  styleUrls: ['./from-art.component.css']
})
export class FromArtComponent implements OnInit {
  private article: Article;
  private fournisseur: Fournisseur;
  private fournisseurs: Fournisseur[];
  //private _fournisseurService:FournisseurService;


  rForm: FormGroup;
  post: any;
  nomarticle: String = '';
  prixarticle: number ;
  categoriearticle: String = '';
  qte_article: number ;


  addForm(post) {

  }

  constructor(private _fournisseurService:FournisseurService, private _articleService:ArticleService,private _rotuer:Router,  fb: FormBuilder ) {
    if(!localStorage.getItem("user")){
      this._rotuer.navigate(['../login']);

    }
    else {
      let user = JSON.parse(localStorage.getItem("user"));
      if (user.role !== "admin") {
        this._rotuer.navigate(['../liste']);
      }
    }
    this.rForm = fb.group({

      'nomarticle': [null, Validators.required],
      'prixarticle': [null, [Validators.required]],
      'categoriearticle': [null, Validators.required],
      'qte_article': [null, [Validators.required]],


    });
  }
  deconnexion(){
    localStorage.clear();
    this._rotuer.navigate(['../login']);
  }
  ngOnInit() {
    this.article=this._articleService.getter();
    this.fournisseur=this._fournisseurService.getter()
    this._fournisseurService.getFournisseur().subscribe((fournisseurs)=>{
        console.log(fournisseurs);
        this.fournisseurs=fournisseurs;
      },(error)=>{
        console.log(error);
      }
    )

  }

  processForm(){
    if(this.article.id==undefined){
      this._articleService.createArticle(this.article).subscribe((article)=>{
        console.log(article);
        this._rotuer.navigate(['/']);
      },(error)=>{
        console.log(error);
      });
    }else{
      this._articleService.updateArticle(this.article).subscribe((article)=>{
        console.log(article);
        this._rotuer.navigate(['/']);
      },(error)=>{
        console.log(error);
      });
    }
  }

}
