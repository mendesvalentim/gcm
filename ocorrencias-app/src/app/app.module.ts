import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { OcorrenciasModule } from './ocorrencias/ocorrencias.module';
import { BoGcmModule } from './bo-gcm/bo-gcm.module';

import { OcorrenciasService } from './ocorrencias.service';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthService } from './auth.service';
import { TokenInterceptor } from './token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    TemplateModule,
    OcorrenciasModule,
    BoGcmModule,
    AppRoutingModule
  ],
  providers: [
    OcorrenciasService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }