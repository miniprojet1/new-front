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
  quantite: number ;


  addForm(post) {

  }

  constructor(private _fournisseurService:FournisseurService, private _articleService:ArticleService,private _rotuer:Router,  fb: FormBuilder ) {
    this.rForm = fb.group({

      'nomarticle': [null, Validators.required],
      'prixarticle': [null, [Validators.required]],
      'categoriearticle': [null, Validators.required],
      'qantite': [null, [Validators.required]],


    });
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
