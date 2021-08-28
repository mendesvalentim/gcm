import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoGcmFormComponent } from './bo-gcm-form/bo-gcm-form.component';
import { BoGcmListaComponent } from '../ocorrencias/bo-gcm-lista/bo-gcm-lista.component';

const routes: Routes = [
  { path: 'bo-gcm-form', component: BoGcmFormComponent},
  { path: 'bo-gcm-lista', component: BoGcmListaComponent}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoGcmRoutingModule { }
