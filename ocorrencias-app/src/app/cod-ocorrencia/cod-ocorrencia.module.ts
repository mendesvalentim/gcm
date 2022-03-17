import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouterModule } from '@angular/router';


import { CodOcorrenciaRoutingModule } from './cod-ocorrencia-routing.module';
import { CodOcorrenciaFormComponent } from './cod-ocorrencia-form/cod-ocorrencia-form.component';
import { CodOcorrenciaListaComponent } from './cod-ocorrencia-lista/cod-ocorrencia-lista.component';


@NgModule({
  declarations: [
    CodOcorrenciaFormComponent,
    CodOcorrenciaListaComponent
  ],
  imports: [
    CommonModule,
    CodOcorrenciaRoutingModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,    
    RouterModule
  ],exports:[
    CodOcorrenciaFormComponent,
    CodOcorrenciaListaComponent
  ]
})
export class CodOcorrenciaModule { }
