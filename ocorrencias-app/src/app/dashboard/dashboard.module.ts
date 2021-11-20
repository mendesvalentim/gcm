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