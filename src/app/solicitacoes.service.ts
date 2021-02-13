import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Solicitacao } from './solicitacoes/solicitacao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitacoesService {

  constructor( private http : HttpClient) { }

   inserir( solicitacao : Solicitacao ) : Observable<Solicitacao> {
    return this.http.post<Solicitacao>('http://localhost:8080/api/solicitacoes',solicitacao);
   }

   atualizar( solicitacao : Solicitacao ) : Observable<any> {
    return this.http.put<Solicitacao>(`http://localhost:8080/api/solicitacoes/${solicitacao.id}`,solicitacao);
   }

   getSolicitacoes(): Observable <Solicitacao[]>{
    return this.http.get<Solicitacao[]>('http://localhost:8080/api/solicitacoes');
   }

   getSolicitacoesById(id: number) : Observable<Solicitacao>{
     return this.http.get<any>(`http://localhost:8080/api/solicitacoes/${id}`);
   }

   deletarSolicitacao(solicitacao: Solicitacao) : Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/solicitacoes/${solicitacao.id}`);
  }
}
