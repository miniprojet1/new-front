import { Component, OnInit } from '@angular/core';
import{FournisseurService} from '../../shared_service/fournisseur.service';
import{Fournisseur } from '../../fournisseur';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listfournisseur',
  templateUrl: './listfournisseur.component.html',
  styleUrls: ['./listfournisseur.component.css']
})
export class ListfournisseurComponent implements OnInit {
private fournisseurs:Fournisseur[];

  constructor(private _fournisseurService:FournisseurService,private _router:Router) { }

  ngOnInit() { 
    this._fournisseurService.getFournisseur().subscribe((fournisseurs)=>{
      console.log(fournisseurs);
      this.fournisseurs=fournisseurs;
    },(error)=>{
      console.log(error);
    }
    )
  
  }
  deleteFournisseur(fournisseur){
    this._fournisseurService.deleteFournisseur(fournisseur.id).subscribe((data)=>{
      this.fournisseurs.splice(this.fournisseurs.indexOf(fournisseur),1);
    }
  
    )


}
deleteUser(fournisseur){
  this._fournisseurService.deleteFournisseur(fournisseur.id).subscribe((data)=>{
      this.fournisseurs.splice(this.fournisseurs.indexOf(fournisseur),1);
  },(error)=>{
    console.log(error);
  });
}
updateFournisseur(fournisseur){  
  this._fournisseurService.setter(fournisseur);
  this._router.navigate(['/ajoutfournisseur']);

}
newFournisseur(){
  let fournisseur =new Fournisseur();
  this._fournisseurService.setter(fournisseur);
  this._router.navigate(['/ajoutfournisseur']);

}

}
