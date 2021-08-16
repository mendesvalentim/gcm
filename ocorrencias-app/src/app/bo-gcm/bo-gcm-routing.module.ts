import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { BoGcmFormComponent } from './bo-gcm-form/bo-gcm-form.component';
import { BoGcmListaComponent } from './bo-gcm-lista/bo-gcm-lista.component';

const routes: Routes = [
  { path: 'bo-gcm', component: LayoutComponent, children: [
    { path: 'form', component: BoGcmFormComponent},
    { path: 'lista', component: BoGcmListaComponent},
    { path:'', redirectTo: '/bo-gcm/lista', pathMatch: 'full'} 
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoGcmRoutingModule { }
