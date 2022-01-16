import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { OcorrenciasListaComponent } from './ocorrencias/ocorrencias-lista/ocorrencias-lista.component';

const routes: Routes = [
  { path: 'login',  component: LoginComponent },
  { path: '', component: LayoutComponent, children: [
    { path: 'home',  component: OcorrenciasListaComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/ocorrencias/lista', pathMatch: 'full'}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
