import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{ArticleService} from '../../shared_service/article.service';
import {FormBuilder,Validators,FormGroup, Validator} from '@angular/forms';
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
    if (localStorage.getItem("user")) {
      let user = JSON.parse(localStorage.getItem('user'));
      if(user.role == "admin"){
        this._rotuer.navigate(['../admi']);
      }

    }
  }

  ngOnInit() {
  }
  login(){
    console.log(this.loginn);
    if(this.loginn.login == "" || this.loginn.password == ""){
      alert("login et password ne doivent pas etre vide");
    }

    else {
      this._articleService.login(this.loginn.login,this.loginn.password).subscribe(
        data => {
          if(data.login == null){
            alert('login or password incorrect');

          }

          else {

            localStorage.setItem("user",JSON.stringify(data));
            if(data.role=="admin"){
              this._rotuer.navigate(['../admi']);
            }
            else {
              this._rotuer.navigate(['../liste']);
            }
          }
        }
      );
    }


   }
    }



