import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { OcorrenciasRoutingModule } from './ocorrencias-routing.module';
import { OcorrenciasformComponent } from './ocorrencias-form/ocorrencias-form.component';
import { OcorrenciasListaComponent } from './ocorrencias-lista/ocorrencias-lista.component';


@NgModule({
  declarations: [
    OcorrenciasformComponent,
    OcorrenciasListaComponent
  ],
  imports: [
    CommonModule,
    OcorrenciasRoutingModule,
    FormsModule
  ], exports: [
    OcorrenciasformComponent,
    OcorrenciasListaComponent    
  ]
})
export class OcorrenciasModule { }
