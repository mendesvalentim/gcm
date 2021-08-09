import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OcorrenciasformComponent } from './ocorrencias-form/ocorrencias-form.component'
import { OcorrenciasListaComponent } from './ocorrencias-lista/ocorrencias-lista.component';

const routes: Routes = [
  { path: 'ocorrencias-form',  component: OcorrenciasformComponent  },
  { path: 'ocorrencias-lista', component: OcorrenciasListaComponent }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OcorrenciasRoutingModule { }
