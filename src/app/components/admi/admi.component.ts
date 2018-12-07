import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admi',
  templateUrl: './admi.component.html',
  styleUrls: ['./admi.component.css']
})
export class AdmiComponent implements OnInit {

  constructor(private _rotuer:Router) {
    if(!localStorage.getItem("user")){
      this._rotuer.navigate(['../login']);

    }
  }
  deconnexion(){
    localStorage.clear();
    this._rotuer.navigate(['../login']);


  }
  ngOnInit() {
  }

}
