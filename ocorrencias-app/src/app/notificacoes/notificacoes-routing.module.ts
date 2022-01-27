import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificacoesFormComponent } from './notificacoes-form/notificacoes-form.component';
import { NotificacoesListaComponent } from '../ocorrencias/notificacoes-lista/notificacoes-lista.component';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  { path: 'notificacoes', component: LayoutComponent,
    canActivate: [AuthGuard], children: [
      
    { path: 'form', component: NotificacoesFormComponent},
    { path: 'lista', component: NotificacoesListaComponent},
    { path: '', redirectTo: '/notificacoes/lista', pathMatch: 'full'}  
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificacoesRoutingModule { }
