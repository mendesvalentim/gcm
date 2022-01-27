import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Notificacoes } from './notificacoes/notificacoes';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class NotificacoesService {

  apiURL: string = environment.apiUrlBase + '/api/notificacoes';

  constructor( private http: HttpClient) {

  }
   
  getNotificacoes() : Observable<Notificacoes[]> {
    return this.http.get<Notificacoes[]>(`${this.apiURL}`);
  }
  
}
