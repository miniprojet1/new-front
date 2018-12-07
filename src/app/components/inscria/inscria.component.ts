import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
@Component({
  selector: 'app-inscria',
  templateUrl: './inscria.component.html',
  styleUrls: ['./inscria.component.css']
})
export class InscriaComponent implements OnInit {
  rForm: FormGroup;
  post: any;
  nom: String = '';
  prenom: String= '';
  adresse: String = '';
  email: String = '';
  lieu: String= '';
  Date : Date;
  courriel : String= '';
  numero: Number;


  addForm(post) {

  }

  constructor(fb: FormBuilder) {
    this.rForm = fb.group({
      'nom': [null, Validators.required],
      'prenom': [null, Validators.required],
      'adresse': [null, Validators.required],
      'courriel': [null, [Validators.required, Validators.email]],
      'lieu': [null, Validators.required],
      'date': [null, Validators.required],
      'numero': [null, Validators.required],

    });
  }

  ngOnInit() {
  }

}
