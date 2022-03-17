import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { CodOcorrenciaFormComponent } from './cod-ocorrencia-form/cod-ocorrencia-form.component';
import { CodOcorrenciaListaComponent } from './cod-ocorrencia-lista/cod-ocorrencia-lista.component';

const routes: Routes = [ { path: 'cod-ocorrencia', component: LayoutComponent,
canActivate: [AuthGuard], children: [
  
{ path: 'form', component: CodOcorrenciaFormComponent},
{ path: 'form/:id', component: CodOcorrenciaFormComponent  },  
{ path: 'lista', component: CodOcorrenciaListaComponent},
{ path: '', redirectTo: '/cod-ocorrencia/lista', pathMatch: 'full'}  
]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodOcorrenciaRoutingModule { }
