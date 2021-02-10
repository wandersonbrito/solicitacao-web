import { Component, OnInit } from '@angular/core';

import { Solicitacao } from '../solicitacao';
import { SolicitacoesService } from '../../solicitacoes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-solicitacoes-form',
  templateUrl: './solicitacoes-form.component.html',
  styleUrls: ['./solicitacoes-form.component.css']
})
export class SolicitacoesFormComponent implements OnInit {

  solicitacao:Solicitacao;
  success: boolean =false;
  errors: String[];

  constructor( private service : SolicitacoesService ,
    private router: Router
    ) { 
    this.solicitacao = new Solicitacao();
  }

  ngOnInit(): void {
  }

  voltarParaListagem(){
    this.router.navigate(['/solicitacoes-lista'])
  }

  onSubmit(){
    this.service
      .inserir(this.solicitacao)
      .subscribe( response => {   
        this.success=true;  
        this.errors = null; 
        this.solicitacao = response ;
      }, errorResponse =>{
        this.errors = errorResponse.error.errors;
        this.success=false;
      }
       )
  }

}
