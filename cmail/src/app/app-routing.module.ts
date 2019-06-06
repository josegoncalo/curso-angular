import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './modules/login/login.component';
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';

const rotas: Routes = [
    {path: '', component: LoginComponent},
    {path: 'imbox', 
        component: CaixaDeEntradaComponent,
        canActivate: [AuthGuard]
    },
    {path: 'cadastro', loadChildren: 'src/app/modules/cadastro/cadastro.module#CadastroModule'},
    {path: '**', redirectTo: 'imbox'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(rotas)
    ],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class ModuloRoteamento {}