import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { OcorrenciasModule } from './ocorrencias/ocorrencias.module';
import { OcorrenciasService } from './ocorrencias.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    OcorrenciasModule
  ],
  providers: [
    OcorrenciasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
