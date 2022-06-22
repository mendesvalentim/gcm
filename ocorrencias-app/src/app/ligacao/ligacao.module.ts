import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { LigacaoRoutingModule } from './ligacao-routing.module';
import { LigacaoListaComponent } from './ligacao-lista/ligacao-lista.component';
import { LigacaoformComponent } from './ligacao-form/ligacao-form.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgSelect2Module } from 'ng-select2';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';




@NgModule({
  declarations: [
    LigacaoformComponent,
    LigacaoListaComponent    
  ],
  imports: [  
    CommonModule,
    LigacaoRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    NgSelect2Module,
    AutocompleteLibModule,
    FormsModule
  ], exports: [
    LigacaoformComponent,
    LigacaoListaComponent
  ]
})
export class LigacaoModule { }
