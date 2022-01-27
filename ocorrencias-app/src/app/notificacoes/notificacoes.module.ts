import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NotificacoesRoutingModule } from './notificacoes-routing.module';
import { NotificacoesFormComponent } from './notificacoes-form/notificacoes-form.component';
import { NotificacoesListaComponent } from '../ocorrencias/notificacoes-lista/notificacoes-lista.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    NotificacoesFormComponent,
    NotificacoesListaComponent
  ],
  imports: [
    CommonModule,
    NotificacoesRoutingModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,    
    RouterModule
  ], exports:[
    NotificacoesFormComponent,
    NotificacoesListaComponent
  ]
})
export class NotificacoesModule { }
