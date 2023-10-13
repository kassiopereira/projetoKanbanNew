
import { FormsModule } from '@angular/forms';
import { Component, NgModule } from '@angular/core';
import {NgFor} from '@angular/common';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { Atividade } from '../interface/iAtividade';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';


/**
 * @title Drag&Drop connected sorting
 */

@Component({
  selector: 'app-quadro-kanban',
  templateUrl: './quadro-kanban.component.html',
  styleUrls: ['./quadro-kanban.component.scss'],


})
export class QuadroKanbanComponent {



  atividades: Observable<any> | undefined;
  listaFilas: Observable<any> | undefined;


  id = '';
  nome = '';
  descricao ='';
  endereco =''
  fila = '';

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
  constructor(private apiService: ApiService){
    this.obterAtividadesCadastradas()
    this.obterLista()
  }


  obterAtividadesCadastradas(){
    this.atividades = this.apiService.obterChamados()
    /* this.atualizarListas(); */

  }
  obterLista(){
    this.listaFilas = this.apiService.obterListas();
  }




  butonClick(){
    if(!this.nome || !this.endereco)
     return;
    if(this.id){
      this.atualizarAtividade();
      return;
    }
    this.apiService.cadastrarAtividade({nome: this.nome, descricao: this.descricao, endereco: this.endereco, fila: parseInt(this.fila)})
      .subscribe(_ => this.obterAtividadesCadastradas())
  }
  preencherCampos(atividade: Atividade){
    this.id = atividade.id!.toString();
    this.nome = atividade.nome;
    this.descricao = atividade.descricao;
    this.endereco = atividade.endereco;
    this.fila = atividade.fila!.toString();

  }
  atualizarAtividade(){
    this.apiService.editarAtividade({id: parseInt(this.id), nome: this.nome, endereco: this.endereco, descricao: this.descricao, fila: parseInt(this.fila)})
      .subscribe(_ => this.obterAtividadesCadastradas())

  }

  removerAtividade(id: number){
    this.apiService.remover(id)
    .subscribe(_ => this.obterAtividadesCadastradas())

  }


  drop(event: CdkDragDrop<Atividade[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }


}
