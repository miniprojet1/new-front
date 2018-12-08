import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/employe';
import { EmployeService } from 'src/app/shared_service/employe.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listemploye',
  templateUrl: './listemploye.component.html',
  styleUrls: ['./listemploye.component.css']
})
export class ListemployeComponent implements OnInit {
private employes:Employe[];
  constructor(private _employeService:EmployeService,private _router:Router) {

    if(!localStorage.getItem("user")){
      this._router.navigate(['../login']);

    }
    else {
      let user = JSON.parse(localStorage.getItem("user"));
      if(user.role !== "admin"){
        this._router.navigate(['../liste']);
      }
    }
  }
  deconnexion(){
    localStorage.clear();
    this._router.navigate(['../login']);
  }
  ngOnInit() {
    this._employeService.getEmploye().subscribe((employes)=>{
      console.log(employes);
      this.employes=employes;
    },(error)=>{
      console.log(error);
    }
    )
  }
  
  
}
