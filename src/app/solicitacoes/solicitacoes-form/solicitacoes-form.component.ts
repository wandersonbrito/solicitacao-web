import { Component, OnInit } from '@angular/core';

import { Solicitacao } from '../solicitacao';

@Component({
  selector: 'app-solicitacoes-form',
  templateUrl: './solicitacoes-form.component.html',
  styleUrls: ['./solicitacoes-form.component.css']
})
export class SolicitacoesFormComponent implements OnInit {

  solcitacao:Solicitacao;
  tipoDocumento:string='w';

  constructor() { 
    this.solcitacao = new Solicitacao();
    this.solcitacao.tipoDocumento ='www';
  }

  ngOnInit(): void {
  }

  clicar(){
    console.log('Cliquei  ')
  }

}
