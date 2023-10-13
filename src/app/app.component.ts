
import { ApiService } from './api.service';
import {Component} from '@angular/core';
import {NgFor} from '@angular/common';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { environment } from 'src/environments/environment';

/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'projeto-kanban-drag-drop';

  constructor(private apiService: ApiService){
  }

}
