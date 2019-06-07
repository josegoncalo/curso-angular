import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { PageDataService } from 'src/app/services/page.service';
import { HeaderDataService } from 'src/app/services/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: [`
    ul, li{
      margin: 0;
      padding: 0;
      list-style-type: none;
    }`
  ]
})
export class CaixaDeEntradaComponent {

  private _isNewEmailFormOpen = false;

  emailList = [ ];
  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  };
  termoParaFiltro = '';

  ngOnInit(){
    this.emailService.listar().subscribe(lista => {
      this.emailList = lista;
    });
    this.pageDataService.defineTitulo('Caixa de entrada - Cmail');
    this.headerService.valorDoFiltro.subscribe(novoValor => this.termoParaFiltro = novoValor);
  }

  constructor(private emailService: EmailService, 
    private pageDataService: PageDataService, 
    private headerService: HeaderDataService,
    private roteador: Router){}

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }

  toggleNewEmailForm() {
    this._isNewEmailFormOpen = !this.isNewEmailFormOpen
  }

  handleNewEmail(formEmail: NgForm) {
    if (formEmail.invalid) return;
    this.emailService.enviar(this.email).subscribe(emailApi => {
      this.emailList.push(emailApi);
      this.email = {destinatario: '', assunto: '', conteudo: '' };
      formEmail.reset();
    },
    erro => console.log(erro))

  }

  handleRemoveEmail(eventoVaiRemover, emailId){
    console.log(eventoVaiRemover);   
    if(eventoVaiRemover.status === 'removing'){
      this.emailService.deletar(emailId).subscribe(res => {
        console.log(res);
        this.emailList = this.emailList.filter(email => email.id != emailId);
      },
      err => console.log(err))
    }
  }

  filtrarEmailsPorAssunto(){
    const termoParaFiltroEmMinusculo = this.termoParaFiltro.toLowerCase();
    return this.emailList.filter(email => {
      const assunto = email.assunto.toLowerCase();
      return assunto.includes(termoParaFiltroEmMinusculo);
    })
  }

  handleExibirEmail(click: Event, emailId){
    console.log('Exibir e-mail');
    this.roteador.navigate(['/exibir']);
  }
}
