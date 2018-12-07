import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router' ;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListfournisseurComponent } from './components/listfournisseur/listfournisseur.component';
import { FournisseurFromComponent } from './components/fournisseur-from/fournisseur-from.component';

import {FournisseurService} from'./shared_service/fournisseur.service';
import{HttpModule} from '@angular/http';
import {Listarticlecomponent} from './components/listarticle/listarticle.component';
import {ArticleService} from'./shared_service/article.service';
import{PayementService} from './shared_service/payement.service';


import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import { FromArtComponent } from './components/from-art/from-art.component';
import { LoginComponent } from './components/login/login.component';
import { ListpaymentComponent } from './components/listpayment/listpayment.component';
import { FromPaymentComponent } from './components/from-payment/from-payment.component';
import { ListemployeComponent } from './components/listemploye/listemploye.component';
import { AdmiComponent } from './components/admi/admi.component';
import { ContactComponent } from './components/contact/contact.component';
import { ListeComponent } from './components/liste/liste.component';
import { ProduitComponent } from './components/produit/produit.component';


const appRoutes:Routes=[
  {path:'listfournisseur',component:ListfournisseurComponent},
  {path:'ajoutfournisseur',component:FournisseurFromComponent},
  {path:'listarticle',component:Listarticlecomponent},
  {path:'ajoutarticle',component:FromArtComponent},
  {path: 'accueil',component:AccueilComponent},
  {path: '',component:HomeComponent},
  {path: 'login',component:LoginComponent},
  {path: 'listpayement',component:ListpaymentComponent},
  {path: 'ajoutpayement',component:FromPaymentComponent},
  {path: 'listemploye',component:ListemployeComponent},
  {path: 'admi',component:AdmiComponent},
  {path: 'contact',component:ContactComponent},
  {path: 'liste',component:ListeComponent}


] 
@NgModule({
  declarations: [
    AppComponent,
    ListfournisseurComponent,
    FournisseurFromComponent,
    Listarticlecomponent,
    ListemployeComponent,
    HomeComponent,
    AccueilComponent,
    FromArtComponent,
    LoginComponent,
    ListpaymentComponent,
    FromPaymentComponent,
    ListemployeComponent,
    AdmiComponent,
    ContactComponent,
    ListeComponent,
    ProduitComponent,

  ],
  imports: [
    BrowserModule,HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
 
    
  ],
  providers: [Listarticlecomponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
