import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { LoginComponent } from './modules/login/login.component';
import { ModuloRoteamento } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CadastroModule } from "./modules/cadastro/cadastro.module";
import { SharedComponentModule } from './components/shared-components.module';
import { LoginModule } from './modules/login/login/login.module';
import { FiltroPorAssuntoPipe } from './modules/caixa-de-entrada/filtro-por-assunto.pipe';
import { ExibirEmailComponent } from './components/exibir-email/exibir-email.component';
import { ExibirEmailModule } from './modules/exibir-email/exibir-email.module';

@NgModule({
  declarations: [
    AppComponent,    
    CaixaDeEntradaComponent,
    LoginComponent,
    FiltroPorAssuntoPipe,
    ExibirEmailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModuloRoteamento,  
    HttpClientModule,
    CadastroModule,
    SharedComponentModule,
    LoginModule,
    ExibirEmailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
