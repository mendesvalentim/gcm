import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';

import { LayoutComponent } from '../layout/layout.component';
import { LigacaoformComponent } from './ligacao-form/ligacao-form.component';
import { LigacaoListaComponent } from './ligacao-lista/ligacao-lista.component';

const LigacaoRoutes: Routes = [
  { path: 'ligacao', component: LayoutComponent,
    canActivate: [AuthGuard],  children:[
      
    { path: 'form',  component: LigacaoformComponent  },
    { path: 'form/:id', component: LigacaoformComponent  },  
    { path: 'lista', component: LigacaoListaComponent },
    { path: '', redirectTo: '/ligacao/lista', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(LigacaoRoutes)],
  exports: [RouterModule]
})
export class LigacaoRoutingModule { }
