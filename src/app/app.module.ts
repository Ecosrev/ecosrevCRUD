import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form/cliente-form.component';
import { PostoComponent } from './posto-coleta/posto/posto.component';
import { PostoFormComponent } from './posto-coleta/posto-form/posto-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AbasComponent } from './abas/abas.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AbasClienteComponent } from './abas-cliente/abas-cliente.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { BeneficiosListComponent } from './beneficios/beneficios-list/beneficios-list.component';
import { BeneficiosFormComponent } from './beneficios/beneficios-form/beneficios-form.component';
import { CentralComponent } from './central/central.component';
import { SobreComponent } from './sobre/sobre.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { NovaSenhaComponent } from './esqueci_senha/nova-senha/nova-senha.component';
import { CodigoComponent } from './esqueci_senha/codigo/codigo.component';
import { AlteradaComponent } from './esqueci_senha/alterada/alterada.component';
import { SenhaComponent } from './esqueci_senha/senha/senha.component';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteListComponent,
    ClienteFormComponent,
    PostoComponent,
    PostoFormComponent,
    AbasComponent,
    AbasClienteComponent,
    HomeComponent,
    LoginComponent,
    BeneficiosListComponent,
    BeneficiosFormComponent,
    CentralComponent,
    SobreComponent,
    PesquisaComponent,
    NovaSenhaComponent,
    CodigoComponent,
    AlteradaComponent,
    SenhaComponent,
    CadastroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
