import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';

import { LayoutComponent } from '../layout/layout.component';
import { OcorrenciasformComponent } from './ocorrencias-form/ocorrencias-form.component'
import { OcorrenciasListaComponent } from './ocorrencias-lista/ocorrencias-lista.component';
import { OcorrenciasVisualizarComponent } from './ocorrencias-visualizar/ocorrencias-visualizar.component';


const OcorrenciasRoutes: Routes = [
  { path: 'ocorrencias', component: LayoutComponent,
    canActivate: [AuthGuard],  children:[
      
    { path: 'form',  component: OcorrenciasformComponent  },
    { path: 'form/:id', component: OcorrenciasformComponent  },  
    { path: 'lista', component: OcorrenciasListaComponent },
    { path: 'visualizar/:id', component: OcorrenciasVisualizarComponent },
    { path: '', redirectTo: '/ocorrencias/lista', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(OcorrenciasRoutes)],
  exports: [RouterModule]
})
export class OcorrenciasRoutingModule { }
