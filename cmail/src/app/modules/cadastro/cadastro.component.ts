import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'cmail-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  mensagensErro: HttpErrorResponse;

  formCadastro = new FormGroup({
    nome: new FormControl('',[Validators.required, Validators.minLength(3)]),
    userName: new FormControl('',[Validators.required]),
    senha: new FormControl('',[Validators.required]),
    telefone: new FormControl('',[Validators.required, Validators.pattern('[0-9]{4}-?[0-9]{4}[0-9]?')]),
    avatar: new FormControl('',[Validators.required],this.validaImagem.bind(this))
  })

  constructor(private httpClient: HttpClient, private roteador: Router) { }

  ngOnInit() {
  }

  handleCadastroUsuario() {
    if(this.formCadastro.valid){
      const userData = new User(this.formCadastro.value);
      this.httpClient.post('http://localhost:3200/users',userData).subscribe(() => {
        console.log('Cadastrado com sucesso');
        this.formCadastro.reset();
        setTimeout(() => {
          this.roteador.navigate(['']);
        },1000)
      }, (resposeErro: HttpErrorResponse) => {
        this.mensagensErro = resposeErro.error.body
      })

      //console.log(this.formCadastro.value);
     // this.formCadastro.reset();
    }else{
        this.validarTodosOsCamposDoFormulario(this.formCadastro);


     // console.log('Campos precisam ser preenchidos!');
      /*const controls = this.formCadastro.controls;
      Object.values(controls).forEach(control => {
        control.markAsTouched({ onlySelf: true});
      });*/
      /*this.formCadastro.controls.nome.markAsTouched({onlySelf: true});
      this.formCadastro.controls.userName.markAsTouched({onlySelf: true});
      this.formCadastro.controls.senha.markAsTouched({onlySelf: true});
      this.formCadastro.controls.telefone.markAsTouched({onlySelf: true});
      console.log('Campos precisam ser preenchidos!');*/
    }
  }
  validarTodosOsCamposDoFormulario(formCadastro: FormGroup) {
    throw new Error("Method not implemented.");
  }
  validaImagem(camposDoFormulario: FormControl){
    return this.httpClient.head(camposDoFormulario.value,{
      observe: 'response'
    }).pipe(map((response: HttpResponseBase)=>{
      return response.ok?null:{urlInvalida: true}
    }),
    catchError((error)=>{
      return [{urlInvalida: true}]
    })
  
    )
  }
}
