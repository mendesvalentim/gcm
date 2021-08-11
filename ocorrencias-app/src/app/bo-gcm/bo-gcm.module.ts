import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



import { BoGcmRoutingModule } from './bo-gcm-routing.module';
import { BoGcmFormComponent } from './bo-gcm-form/bo-gcm-form.component';
import { BoGcmListaComponent } from './bo-gcm-lista/bo-gcm-lista.component';


@NgModule({
  declarations: [
    BoGcmFormComponent,
    BoGcmListaComponent
  ],
  imports: [
    CommonModule,
    BoGcmRoutingModule
  ], exports:[
    BoGcmFormComponent,
    BoGcmListaComponent
  ]
})
export class BoGcmModule { }
