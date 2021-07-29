import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OcorrenciasformComponent } from './ocorrencias-form/ocorrencias-form.component'

const routes: Routes = [
  { path: 'ocorrencias-form', component: OcorrenciasformComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OcorrenciasRoutingModule { }
