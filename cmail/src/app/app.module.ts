import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { LoginComponent } from './modules/login/login.component';
import { ModuloRoteamento } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { CadastroModule } from './modules/cadastro/cadastro.module'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CaixaDeEntradaComponent,
    LoginComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModuloRoteamento,  
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
