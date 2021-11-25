import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import { AppComponent } from './app.component';


import { AppRoutingModule } from './app-routing.module';
import { CadastrarFarmaciaComponent } from './components/views/cadastrar-farmacia/cadastrar-farmacia.component';
import { CadastrarProdutoComponent } from './components/views/cadastrar-produto/cadastrar-produto.component';
import { CadastrarUsuarioComponent } from './components/views/cadastrar-usuario/cadastrar-usuario.component';
import { ListarProdutoComponent } from './components/views/listar-produto/listar-produto.component';


@NgModule({
  declarations: [
    AppComponent,CadastrarFarmaciaComponent,CadastrarProdutoComponent,CadastrarUsuarioComponent,ListarProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
