import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form/cliente-form.component';
import { PostoComponent } from './posto-coleta/posto/posto.component';
import { PostoFormComponent } from './posto-coleta/posto-form/posto-form.component';
import { AbasComponent } from './abas/abas.component';
import { AbasClienteComponent } from './abas-cliente/abas-cliente.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BeneficiosFormComponent } from './beneficios/beneficios-form/beneficios-form.component';
import { BeneficiosListComponent } from './beneficios/beneficios-list/beneficios-list.component';
import { CentralComponent } from './central/central.component';
import { SobreComponent } from './sobre/sobre.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { NovaSenhaComponent } from './esqueci_senha/nova-senha/nova-senha.component';
import { CodigoComponent } from './esqueci_senha/codigo/codigo.component';
import { AlteradaComponent } from './esqueci_senha/alterada/alterada.component';
import { SenhaComponent } from './esqueci_senha/senha/senha.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  {path: 'clientes', component: ClienteListComponent},
  {path: 'clientes/novo', component: ClienteFormComponent},
  {path: 'clientes/editar/:id', component: ClienteFormComponent},
  {path: 'posto', component: PostoComponent},
  {path: 'posto/novo', component: PostoFormComponent},
  {path: 'posto/editar/:id', component: PostoFormComponent},
  {path: 'abas', component: AbasComponent},
  {path: 'abas-cliente', component: AbasClienteComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'beneficios', component: BeneficiosListComponent},
  {path: 'beneficios/novo', component: BeneficiosFormComponent},
  {path: 'central', component: CentralComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'senha', component: SenhaComponent},
  {path: 'pesquisa', component: PesquisaComponent},
  {path: 'codigo', component: CodigoComponent},
  {path: 'nova_senha', component: NovaSenhaComponent},
  {path: 'alterada', component: AlteradaComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'} //TAVA USANDO PRA TESTE, AQUI PROVAVELMENTE DEVE FICAR O HREF DO INDEX

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
