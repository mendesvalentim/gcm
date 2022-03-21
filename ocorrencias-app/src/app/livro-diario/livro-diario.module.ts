import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivroDiarioRoutingModule } from './livro-diario-routing.module';
import { LivroDiarioFormComponent } from './livro-diario-form/livro-diario-form.component';
import { LivroDiarioListaComponent } from './livro-diario-lista/livro-diario-lista.component';


@NgModule({
  declarations: [
    LivroDiarioFormComponent,
    LivroDiarioListaComponent
  ],
  imports: [
    CommonModule,
    LivroDiarioRoutingModule
  ], exports:[
    LivroDiarioFormComponent,
    LivroDiarioListaComponent

  ]
})
export class LivroDiarioModule { }
