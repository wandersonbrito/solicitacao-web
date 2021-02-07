import { Component, OnInit } from '@angular/core';

import { Solicitacao } from '../solicitacao';

@Component({
  selector: 'app-solicitacoes-form',
  templateUrl: './solicitacoes-form.component.html',
  styleUrls: ['./solicitacoes-form.component.css']
})
export class SolicitacoesFormComponent implements OnInit {

  solicitacao:Solicitacao;

  constructor() { 
    this.solicitacao = new Solicitacao();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.solicitacao)
  }

}
