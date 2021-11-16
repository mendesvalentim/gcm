import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DashboardService } from '../dashboard.service';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ],
  declarations: [
  	
  ],
  exports: [


  ],
  providers: [
  	DashboardService
  ]
})
export class DashboardModule { }

/**@NgModule({
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
    FormsModule
  ], exports: [
    OcorrenciasformComponent,
    OcorrenciasListaComponent,
    OcorrenciasVisualizarComponent    
  ]
})
export class OcorrenciasModule { } */