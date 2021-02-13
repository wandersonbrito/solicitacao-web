import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Solicitacao } from '../solicitacao';
import { SolicitacoesService } from '../../solicitacoes.service';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-solicitacoes-form',
  templateUrl: './solicitacoes-form.component.html',
  styleUrls: ['./solicitacoes-form.component.css']
})
export class SolicitacoesFormComponent implements OnInit {

  solicitacao:Solicitacao;
  success: boolean =false;
  errors: String[];
  id: number;

  constructor( private service : SolicitacoesService ,
    private router: Router,
    private activatedRouter: ActivatedRoute 
    ) { 
    this.solicitacao = new Solicitacao();
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRouter.params
    params.subscribe( urlParams => {
      this.id = urlParams['id'];
      if(this.id){  
        this.service
        .getSolicitacoesById(this.id)
        .subscribe(
          response => this.solicitacao = response,
          errorResponse => this.solicitacao = new Solicitacao()
          )
      }
    })
  }

  voltarParaListagem(){
    this.router.navigate(['/solicitacoes-lista'])
  }

  onSubmit(){
    if(this.solicitacao.id){
      this.service
      .atualizar(this.solicitacao)
      .subscribe(response => {
        this.success = true;
          this.errors = null;
      }, errorResponse => {
        this.errors = ['Erro em atualizar solicitação']
      } )
    }
    else{
      this.service
        .inserir(this.solicitacao)
        .subscribe( response => {   
          this.success=true;  
          this.errors = null; 
          this.solicitacao = response ;
        }, errorResponse =>{
          this.errors = errorResponse.error.errors;
          this.success=false;
      } )
    }
  }

}
