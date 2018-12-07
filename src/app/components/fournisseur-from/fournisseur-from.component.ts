import { Component, OnInit } from '@angular/core';
import {Fournisseur}from'../../fournisseur';
import {Router} from '@angular/router';
import{FournisseurService} from '../../shared_service/fournisseur.service';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
@Component({
  selector: 'app-fournisseur-from',
  templateUrl: './fournisseur-from.component.html',
  styleUrls: ['./fournisseur-from.component.css']
})
export class FournisseurFromComponent implements OnInit {

  rForm: FormGroup;
  post: any;
  nom: String = '';
  adresse: String = '';
  email: String = '';



  addForm(post) {

  }



private fournisseur:Fournisseur;
  constructor(private _fournisseurService: FournisseurService , private _rotuer:Router , fb: FormBuilder ) {
    this.rForm = fb.group({
      'nom': [null, Validators.required],
      'adresse': [null, Validators.required],
      'email': [null, [Validators.required, Validators.email]],

    });

  }

  ngOnInit() {
    this.fournisseur=this._fournisseurService.getter();
  }
  processForm(){
    if(this.fournisseur.id==undefined){
       this._fournisseurService.createFournisseur(this.fournisseur).subscribe((fournisseur)=>{
         console.log(fournisseur);
         this._rotuer.navigate(['/']);
       },(error)=>{
         console.log(error);
       });
    }else{
       this._fournisseurService.updateFournisseur(this.fournisseur).subscribe((fournisseur)=>{
         console.log(fournisseur);
         this._rotuer.navigate(['/']);
       },(error)=>{
         console.log(error);
       });
    }
  }
}
