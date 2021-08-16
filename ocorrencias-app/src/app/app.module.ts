import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { OcorrenciasModule } from './ocorrencias/ocorrencias.module';
import { BoGcmModule } from './bo-gcm/bo-gcm.module';

import { OcorrenciasService } from './ocorrencias.service';
import { BoGcmService } from './bo-gcm.service';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    OcorrenciasModule,
    BoGcmModule
  ],
  providers: [
    OcorrenciasService,
    BoGcmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
