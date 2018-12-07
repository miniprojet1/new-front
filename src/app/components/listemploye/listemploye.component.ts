import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/employe';
import { EmployeService } from 'src/app/shared_service/employe.service';


@Component({
  selector: 'app-listemploye',
  templateUrl: './listemploye.component.html',
  styleUrls: ['./listemploye.component.css']
})
export class ListemployeComponent implements OnInit {
private employes:Employe[];
  constructor(private _employeService:EmployeService) { }

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