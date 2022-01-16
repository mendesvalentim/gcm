import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';

import { LayoutComponent } from '../layout/layout.component';
import { SinespFormComponent } from './sinesp-form/sinesp-form.component';
import { SinespListaComponent } from './sinesp-lista/sinesp-lista.component';


const SinespRoutes: Routes = [
  { path: 'sinesp', component: LayoutComponent,
    canActivate: [AuthGuard],  children:[
      
    { path: 'form',  component: SinespFormComponent  },
    { path: 'form/:id', component: SinespFormComponent },  
    { path: 'lista', component: SinespListaComponent },    
    { path: '', redirectTo: '/sinesp/lista', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(SinespRoutes)],
  exports: [RouterModule]
})
export class SinespRoutingModule { }
