import { Component, OnInit } from '@angular/core';
import { Solicitacao } from '../solicitacao';
import { SolicitacoesService } from '../../solicitacoes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitacoes-lista',
  templateUrl: './solicitacoes-lista.component.html',
  styleUrls: ['./solicitacoes-lista.component.css']
})
export class SolicitacoesListaComponent implements OnInit {

  solicitacoes: Solicitacao[] = [];
  solicitacaoSelecionada: Solicitacao;
  messagemSucesso: string;
  mensagemErro: string;


  constructor(private service: SolicitacoesService,
              private router : Router) {}
 
  ngOnInit(): void {
    this.service
      .getSolicitacoes()
      .subscribe( resposta => this.solicitacoes = resposta);
  }

  novoCadastro(){
    this.router.navigate(['solicitacoes-form'])
  }

  preparaDelecao(solicitacao: Solicitacao){
    this.solicitacaoSelecionada = solicitacao;
  }

  deletarSolicitacao(){
    this.service
    .deletarSolicitacao(this.solicitacaoSelecionada)
    .subscribe( response => {
                              this.messagemSucesso = 'Solicitação deletada com sucesso'
                              this.ngOnInit()},
                responseError => this.mensagemErro = 'Ocorreu um erro ao deletar solicitação')
    }

}
