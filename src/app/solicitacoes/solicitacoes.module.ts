import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SolicitacoesRoutingModule } from './solicitacoes-routing.module';
import { SolicitacoesFormComponent } from './solicitacoes-form/solicitacoes-form.component';
import { SolicitacoesListaComponent } from './solicitacoes-lista/solicitacoes-lista.component';


@NgModule({
  declarations: [
    SolicitacoesFormComponent,
    SolicitacoesListaComponent
  ],
  imports: [
    CommonModule,
    SolicitacoesRoutingModule,
    FormsModule
  ], exports: [
    SolicitacoesFormComponent,
    SolicitacoesListaComponent
  ]
})
export class SolicitacoesModule { }
