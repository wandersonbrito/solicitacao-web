import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitacoesRoutingModule } from './solicitacoes-routing.module';
import { SolicitacoesFormComponent } from './solicitacoes-form/solicitacoes-form.component';


@NgModule({
  declarations: [SolicitacoesFormComponent],
  imports: [
    CommonModule,
    SolicitacoesRoutingModule
  ], exports: [
    SolicitacoesFormComponent
  ]
})
export class SolicitacoesModule { }
