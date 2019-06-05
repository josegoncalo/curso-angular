import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
@Component({
  selector: 'cmail-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formCadastro = new FormGroup({
    nome: new FormControl('',[Validators.required, Validators.minLength(3)]),
    userName: new FormControl('',[Validators.required]),
    senha: new FormControl('',[Validators.required]),
    telefone: new FormControl('',[Validators.required, Validators.pattern('[0-9]{4}-?[0-9]{4}[0-9]?')]),
    avatar: new FormControl('',[Validators.required],this.validaImagem.bind(this))
  })

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  handleCadastroUsuario() {
    if(this.formCadastro.valid){
      console.log(this.formCadastro.value);
      this.formCadastro.reset();
    }else{
      console.log('Campos precisam ser preenchidos!');
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
