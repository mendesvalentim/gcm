import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SinespFormComponent } from './sinesp-form/sinesp-form.component';
import { SinespListaComponent } from './sinesp-lista/sinesp-lista.component';
import { FormsModule } from '@angular/forms';
import { SinespRoutingModule } from './sinep-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    SinespFormComponent,
    SinespListaComponent
  ],
  imports: [
    CommonModule,
    SinespRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,    
    FormsModule
  ], exports: [
    SinespFormComponent,
    SinespListaComponent    
  ]
})
export class SinespModule { }
