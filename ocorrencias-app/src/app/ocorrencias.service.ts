import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Ocorrencia } from './ocorrencias/ocorrencias';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class OcorrenciasService {

  apiURL: string = environment.apiUrlBase + '/api/ocorrencias';

  constructor( private http: HttpClient) {
  }
   
   salvar(ocorrencia: Ocorrencia): Observable<Ocorrencia>{
    const tokenString = localStorage.getItem('access_token')
    //@ts-ignore
    const token = JSON.parse(tokenString)
    const headers = {
      'Authorization' : 'Bearer' + token.access_token
    }     
     return this.http.post<Ocorrencia>(`${this.apiURL}`, ocorrencia, { headers });
   }

   atualizar(ocorrencia: Ocorrencia): Observable<any>{
    return this.http.put<Ocorrencia>(`${this.apiURL}/${ocorrencia.id}`, ocorrencia);
  }
  getOcorrencias() : Observable<Ocorrencia[]> {
    const tokenString = localStorage.getItem('access_token')
    //@ts-ignore
    const token = JSON.parse(tokenString)
    const headers = {
      'Authorization' : 'Bearer' + token.access_token
    }
    return this.http.get<Ocorrencia[]>(this.apiURL, { headers });
 
  }

  getClienteById(id: number) : Observable<Ocorrencia>{
    return this.http.get<any>(`${this.apiURL}/${id}`);

  }

  deletar(ocorrencia: Ocorrencia): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${ocorrencia.id}`);
  }
  }
