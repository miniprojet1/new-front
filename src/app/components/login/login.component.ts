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
<<<<<<< HEAD
    password : ""
  };
  constructor(private _articleService:ArticleService,private _rotuer:Router ) {
    if(localStorage.getItem("user")){
      this._rotuer.navigate(['../admi']);

    }
=======
    password: ""
  }
    rForm: FormGroup;
  post: any;
 log:String ;
  pass: String ;



addForm(post) {

}
  constructor(private _articleService:ArticleService,private _rotuer:Router,  fb: FormBuilder ) {
    this.rForm = fb.group({

      'log': [null, Validators.required],
      'pass': [null, [Validators.required]]



    });
>>>>>>> 1493a5946b3274b18284128ebccb5fece646ff07
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



