import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitacoesFormComponent } from './solicitacoes-form/solicitacoes-form.component';

const routes: Routes = [
  { path  : 'solicitacoes-form', component: SolicitacoesFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitacoesRoutingModule { }
