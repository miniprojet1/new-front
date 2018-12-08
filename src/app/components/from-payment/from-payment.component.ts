import { Component, OnInit } from '@angular/core';
import {Payement}from'../../payement';

import {Router} from '@angular/router';
import{PayementService} from '../../shared_service/payement.service';
import {Fournisseur}from'../../fournisseur';
import{FournisseurService} from '../../shared_service/fournisseur.service';
import {FormBuilder,Validators,FormGroup, Validator} from '@angular/forms';
@Component({
  selector: 'app-from-payment',
  templateUrl: './from-payment.component.html',
  styleUrls: ['./from-payment.component.css']
})
export class FromPaymentComponent implements OnInit {

  private payement:Payement;
  private fournisseur:Fournisseur;
  private fournisseurs:Fournisseur[];
  //private _fournisseurService:FournisseurService;

  rForm: FormGroup;
  post: any;
  dateechpre:String ;
  dateechpro: String ;



  addForm(post) {

  }
  constructor(private _fournisseurService:FournisseurService, private _payementService:PayementService,private _rotuer:Router , fb: FormBuilder) {

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

      'dateechpre': [null, Validators.required],
      'dateechpro': [null, [Validators.required]]



    });
  }
  deconnexion(){
    localStorage.clear();
    this._rotuer.navigate(['../login']);
  }
  ngOnInit() {
    this.payement=this._payementService.getter();
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
    if(this.payement.id==undefined){
      this._payementService.createPayement(this.payement).subscribe((payement)=>{
        console.log(payement);
        this._rotuer.navigate(['/']);
      },(error)=>{
        console.log(error);
      });
    }else{
      this._payementService.updatePayement(this.payement).subscribe((payement)=>{
        console.log(payement);
        this._rotuer.navigate(['/']);
      },(error)=>{
        console.log(error);
      });
    }
  }

}

