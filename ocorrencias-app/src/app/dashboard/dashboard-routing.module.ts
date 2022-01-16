import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { DashboardComponent } from './dashboard-form/dashboard-form.component';

const routes: Routes = [
  { path: 'dashboard', component: LayoutComponent, canActivate: [AuthGuard], children: [      
    { path: 'form', component: DashboardComponent},
    { path: 'form/:dataInicial/:dataFinal', component: DashboardComponent},
    { path: '', redirectTo: '/dashboard/form', pathMatch: 'full'}    
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
