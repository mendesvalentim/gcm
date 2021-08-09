import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { OcorrenciasRoutingModule } from './ocorrencias-routing.module';
import { OcorrenciasformComponent } from './ocorrencias-form/ocorrencias-form.component';
import { OcorrenciaslistaComponent } from './ocorrenciaslista/ocorrenciaslista.component';


@NgModule({
  declarations: [
    OcorrenciasformComponent,
    OcorrenciaslistaComponent
  ],
  imports: [
    CommonModule,
    OcorrenciasRoutingModule,
    FormsModule
  ], exports: [
    OcorrenciasformComponent
  ]
})
export class OcorrenciasModule { }
