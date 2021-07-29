import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OcorrenciasRoutingModule } from './ocorrencias-routing.module';
import { OcorrenciasformComponent } from './ocorrencias-form/ocorrencias-form.component';


@NgModule({
  declarations: [
    OcorrenciasformComponent
  ],
  imports: [
    CommonModule,
    OcorrenciasRoutingModule
  ], exports: [
    OcorrenciasformComponent
  ]
})
export class OcorrenciasModule { }
