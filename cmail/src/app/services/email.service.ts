import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { Email } from '../models/email';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  api = 'http://localhost:3200/emails';
  cabecalho = new HttpHeaders({'Authorization': localStorage.getItem('TOKEN')});
  constructor(private http: HttpClient) { }

  enviar({destinatario, assunto, conteudo}){
    const emailParaApi = {
      to: destinatario,
      subject: assunto,
      content: conteudo
    }
    return this.http.post(this.api, emailParaApi,{headers: this.cabecalho}).pipe<Email>(
      map((emailApi: any) => {
        return new Email({
          destinatario: emailApi.to,
          assunto: emailApi.subject,
          conteudo: emailApi.content
        })
      })
    )
  }
}
