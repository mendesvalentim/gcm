import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { LivroDiarioFormComponent } from './livro-diario-form/livro-diario-form.component';
import { LivroDiarioListaComponent } from './livro-diario-lista/livro-diario-lista.component';



const routes: Routes = [ { path: 'livro-diario', component: LayoutComponent,
canActivate: [AuthGuard], children: [
  
  { path: 'form', component: LivroDiarioFormComponent},
  { path: 'form/:id', component: LivroDiarioFormComponent  },  
  { path: 'lista', component: LivroDiarioListaComponent},
  { path: '', redirectTo: '/livro-diario/lista', pathMatch: 'full'}  
  ]}
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivroDiarioRoutingModule { }
