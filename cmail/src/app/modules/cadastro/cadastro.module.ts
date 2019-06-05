import { NgModule } from '@angular/core';
import { CadastroComponent } from './cadastro.component';
import { CmailFormGroupComponent } from 'src/app/components/cmail-form-group/cmail-form-group.component';
import { CmailFormFieldDirective } from 'src/app/components/cmail-form-group/cmail-form-field.directive';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    CadastroComponent,
    CmailFormGroupComponent,
    CmailFormFieldDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CadastroComponent
  ]
})
export class CadastroModule { }
