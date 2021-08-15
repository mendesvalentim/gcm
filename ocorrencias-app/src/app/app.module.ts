import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { OcorrenciasModule } from './ocorrencias/ocorrencias.module';
import { OcorrenciasService } from './ocorrencias.service';
import { BoGcmModule } from './bo-gcm/bo-gcm.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    OcorrenciasModule,
    BoGcmModule
  ],
  providers: [
    OcorrenciasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
