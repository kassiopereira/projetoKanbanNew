import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { QuadroKanbanComponent } from './quadro-kanban/quadro-kanban.component';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'chamados', component:QuadroKanbanComponent},
  /* {path:'curso/:id', component:CursoDetalheComponent}, */
  {path:'chat', component:ChatComponent},
  {path:'', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
