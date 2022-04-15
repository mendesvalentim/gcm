import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivroDiarioRoutingModule } from './livro-diario-routing.module';
import { LivroDiarioFormComponent } from './livro-diario-form/livro-diario-form.component';
import { LivroDiarioListaComponent } from './livro-diario-lista/livro-diario-lista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { LivroDiarioVisualizarComponent } from './livro-diario-visualizar/livro-diario-visualizar.component';

@NgModule({
  declarations: [
    LivroDiarioVisualizarComponent,
    LivroDiarioFormComponent,
    LivroDiarioListaComponent
    
  ],
  imports: [
    CommonModule,
    LivroDiarioRoutingModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    AngularEditorModule,
    ReactiveFormsModule
  ], exports:[
    LivroDiarioFormComponent,
    LivroDiarioVisualizarComponent,
    LivroDiarioListaComponent
  ]
})
export class LivroDiarioModule { }
