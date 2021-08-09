import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Ocorrencia } from './ocorrencias/ocorrencias';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OcorrenciasService {

  constructor( private http: HttpClient) {

  }
   

   salvar(ocorrencia: Ocorrencia): Observable<Ocorrencia>{
     return this.http.post<Ocorrencia>('http://localhost:8080/api/ocorrencias', ocorrencia);
   }

  getOcorrencias() : Observable<Ocorrencia[]> {
    return EMPTY;
 
  }
}
