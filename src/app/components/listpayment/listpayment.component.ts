import { Component, OnInit } from '@angular/core';
import{PayementService} from '../../shared_service/payement.service';
import{Payement } from '../../payement';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listpayment',
  templateUrl: './listpayment.component.html',
  styleUrls: ['./listpayment.component.css']
})
export class ListpaymentComponent implements OnInit {
  private payements:Payement[];
  constructor(private _payementService:PayementService,private _router:Router) { }
  ngOnInit() { 
    this._payementService.getPayement().subscribe((payements)=>{
      console.log(payements);
      this.payements=payements;
    },(error)=>{
      console.log(error);
    }
    )
  
  }
  deletePayement(payement){
    this._payementService.deletePayement(payement.id).subscribe((data)=>{
      this.payements.splice(this.payements.indexOf(payement),1);
    }
  
    )


}


updatePayement(payement){  
  this._payementService.setter(payement);
  this._router.navigate(['/ajoutpayement']);

}
newPayement(){
  let payement =new Payement();
  this._payementService.setter(payement);
  this._router.navigate(['/ajoutpayement']);

}

}
