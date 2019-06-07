import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './modules/login/login.component';
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { ExibirEmailComponent } from './components/exibir-email/exibir-email.component';

const rotas: Routes = [
    {path: '', component: LoginComponent},
    {path: 'imbox', 
        component: CaixaDeEntradaComponent,
        canActivate: [AuthGuard]
    },
    {path: 'cadastro', loadChildren: 'src/app/modules/cadastro/cadastro.module#CadastroModule'},
    {path: '**', redirectTo: 'imbox'},
    {path: 'exibir', component: ExibirEmailComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(rotas)
    ],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class ModuloRoteamento {}