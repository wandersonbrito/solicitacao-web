import { Component, OnInit } from '@angular/core';

import { Solicitacao } from '../solicitacao';
import { SolicitacoesService } from '../../solicitacoes.service';
import { Subscriber } from 'rxjs';


@Component({
  selector: 'app-solicitacoes-form',
  templateUrl: './solicitacoes-form.component.html',
  styleUrls: ['./solicitacoes-form.component.css']
})
export class SolicitacoesFormComponent implements OnInit {

  solicitacao:Solicitacao;
  success: boolean =false;
  errors: String[];

  constructor( private service : SolicitacoesService ) { 
    this.solicitacao = new Solicitacao();
  }

  ngOnInit(): void {
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
