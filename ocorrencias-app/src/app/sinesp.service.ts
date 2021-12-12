import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

import { Sinesp } from './sinesp/sinesp';

@Injectable({
  providedIn: 'root'
})
export class SinespService {

  apiURL: string = environment.apiUrlBase + '/api/sinesp';

  constructor( private http: HttpClient) { }

  getAllConsultas() : Observable<Sinesp[]> {   
    return this.http.get<Sinesp[]>(`${this.apiURL}`);
  }

  getConsultaSinespById(id: number) : Observable<Sinesp>{
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }  

  salvar(sinesp: Sinesp): Observable<Sinesp>{
    return this.http.post<Sinesp>(`${this.apiURL}`, sinesp);     
  }

  atualizar(sinesp: Sinesp): Observable<any>{
    return this.http.put<Sinesp>(`${this.apiURL}/${sinesp.id}`, sinesp);
  }  
}

