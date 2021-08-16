import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { OcorrenciasformComponent } from './ocorrencias-form/ocorrencias-form.component'
import { OcorrenciasListaComponent } from './ocorrencias-lista/ocorrencias-lista.component';

const routes: Routes = [
  { path: 'ocorrencias', component: LayoutComponent, children: [
    { path: 'form',  component: OcorrenciasformComponent  },
    { path: 'form/:id', component: OcorrenciasformComponent  },  
    { path: 'lista', component: OcorrenciasListaComponent },
    { path: '', redirectTo : '/ocorrencias/lista', pathMatch: 'full'}  
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OcorrenciasRoutingModule { }
