import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastrarAutomovelComponent } from './components/views/automovel/cadastrar-automovel/cadastrar-automovel.component';
import { ListarAutomovelComponent } from './components/views/automovel/listar-automovel/listar-automovel.component';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    CadastrarAutomovelComponent,
    ListarAutomovelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
