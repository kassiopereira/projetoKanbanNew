import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Atividade } from './interface/iAtividade';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  constructor(private httpClient: HttpClient ) { }
  private urlLista = `${environment.api}/listas`;
  private urlChamados = `${environment.api}/chamados`;
  private urlListasChamados = `${environment.api}/listas?_embed=chamados`;



  obterListas(){
    return this.httpClient.get<string[]>(this.urlLista)
  }
  obterChamados(){
    return this.httpClient.get<Atividade[]>(this.urlChamados)
  }
  getAll(){
    return this.httpClient.get<Atividade[]>(this.urlListasChamados)
  }



  cadastrarAtividade(atividade:Atividade){
   return this.httpClient.post<Atividade>(this.urlChamados,atividade)
  }
  editarAtividade(atividade:Atividade){
    return this.httpClient.put<Atividade>(`${this.urlChamados}/${atividade.id}`, atividade)
   }

   remover(id: number){
    return this.httpClient.delete<void>(`${this.urlChamados}/${id}`)
   }
}
