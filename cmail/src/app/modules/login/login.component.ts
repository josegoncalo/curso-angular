import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { PageDataService } from 'src/app/services/page.service';

@Component({
  selector: 'cmail-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mensagemErro: HttpErrorResponse;
  login = {
    email: '',
    password: ''
  }

  constructor(private loginService: LoginService, private roteador: Router,
    private pageDataService: PageDataService) { }

  ngOnInit() {
    this.pageDataService.defineTitulo('Login - Cmail');
  }

  handleLogin(formLogin: NgForm){
    if(formLogin.valid){
      //this.httpClient.post('http://localhost:3200/login',this.login).subscribe((response: any) => {        
         // localStorage.setItem('TOKEN',response.token); 
         this.loginService.logar(this.login).subscribe(() => this.roteador.navigate(['/imbox']),
         (response: HttpErrorResponse) => this.mensagemErro = response.error)
    } 
    }
  }