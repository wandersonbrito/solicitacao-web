import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitacoesFormComponent } from './solicitacoes-form/solicitacoes-form.component';
import { SolicitacoesListaComponent } from './solicitacoes-lista/solicitacoes-lista.component';

const routes: Routes = [
  { path  : 'solicitacoes-form', component: SolicitacoesFormComponent},
  { path  : 'solicitacoes-form/:id', component: SolicitacoesFormComponent},
  { path  : 'solicitacoes-lista', component: SolicitacoesListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitacoesRoutingModule { }
