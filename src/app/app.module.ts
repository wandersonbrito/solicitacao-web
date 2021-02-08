import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { SolicitacoesModule } from './solicitacoes/solicitacoes.module';
import { SolicitacoesService } from './solicitacoes.service'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    SolicitacoesModule
  ],
  providers: [
    SolicitacoesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
