import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Atividade } from './interface/iAtividade';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  [x: string]: any;

  constructor(private httpClient: HttpClient ) { }
  private urlLista = `${environment.api}/listas`;
  private urlChamados = `${environment.api}/chamados`;


  get(url: string){
    return this.httpClient.get<any>(url)
  }
  obterListas(){
    return this.httpClient.get<[]>(this.urlLista)
  }
  obterChamados(){
    return this.httpClient.get<Atividade[]>(this.urlChamados)
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
