import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { OcorrenciasRoutingModule } from './ocorrencias-routing.module';
import { OcorrenciasformComponent } from './ocorrencias-form/ocorrencias-form.component';
import { OcorrenciasListaComponent } from './ocorrencias-lista/ocorrencias-lista.component';
import { OcorrenciasVisualizarComponent } from './ocorrencias-visualizar/ocorrencias-visualizar.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgSelect2Module } from 'ng-select2';


@NgModule({
  declarations: [
    OcorrenciasformComponent,
    OcorrenciasListaComponent,
    OcorrenciasVisualizarComponent
  ],
  imports: [  
    CommonModule,
    OcorrenciasRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    NgSelect2Module,
    FormsModule
  ], exports: [
    OcorrenciasformComponent,
    OcorrenciasListaComponent,
    OcorrenciasVisualizarComponent    
  ]
})
export class OcorrenciasModule { }
