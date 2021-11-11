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
    return this.http.post<Ocorrencia>(`${this.apiURL}`, ocorrencia);     
  }

  atualizar(ocorrencia: Ocorrencia): Observable<any>{
    return this.http.put<Ocorrencia>(`${this.apiURL}/${ocorrencia.id}`, ocorrencia);
  }
  getAllOcorrencias() : Observable<Ocorrencia[]> {   
    return this.http.get<Ocorrencia[]>(`${this.apiURL}`);
  }

  getOcorrenciaById(id: number) : Observable<Ocorrencia>{
    return this.http.get<any>(`${this.apiURL}/${id}`);

  }

  getBoGcms() : Observable<Ocorrencia[]> {
    return this.http.get<Ocorrencia[]>(`${this.apiURL}/bogcm`);
  }  
  
  buscaUltimoTalao() : Observable<number>{
    return this.http.get<number>(`${this.apiURL}/ultimotalao`);

  }
  
  buscaUltimoBoGcm() : Observable<number>{
    return this.http.get<number>(`${this.apiURL}/ultimobogcm`);

  }

  deletar(ocorrencia: Ocorrencia): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${ocorrencia.id}`);        
  }
  
}
