import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{ArticleService} from '../../shared_service/article.service';
import{FournisseurService} from '../../shared_service/fournisseur.service';
import {Login}from'../../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private  loginn = {
    login: "",
    password : ""
  };
  constructor(private _articleService:ArticleService,private _rotuer:Router ) {
    if(localStorage.getItem("user")){
      this._rotuer.navigate(['../admi']);

    }
  }

  ngOnInit() {
  }
  login(){
    
    console.log(this.loginn);
    this._articleService.login(this.loginn.login,this.loginn.password).subscribe(
      data => {
        if(data.login == null){
          alert('login or password incorrect');

        }

        else {
          localStorage.setItem("user",JSON.stringify(data));
          this._rotuer.navigate(['../admi']);
        }
      }
    );

   }
    }



