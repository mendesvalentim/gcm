import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Select2OptionData } from 'ng-select2';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CodOcorrencia } from './ocorrencias/codOcorrencia';

@Injectable({
  providedIn: 'root'
})
export class CodocorrenciasService {

  apiURL: string = environment.apiUrlBase + '/api/codocorrencias';

  constructor( private http: HttpClient) { }

  getAllCodOcorrenciaSelect2(): Observable<Select2OptionData[]> {
    return this.http.get<Select2OptionData[]>(`${this.apiURL}`);      
  }
  getAllCodOcorrencia(): Observable<CodOcorrencia[]> {
    return this.http.get<CodOcorrencia[]>(`${this.apiURL}`);    
  } 
  salvar(codOcorrencia: CodOcorrencia): Observable<CodOcorrencia>{
    return this.http.post<CodOcorrencia>(`${this.apiURL}`, codOcorrencia);     
  }
  atualizar(codOcorrencia: CodOcorrencia): Observable<any>{
    return this.http.put<CodOcorrencia>(`${this.apiURL}/${codOcorrencia.id}`, codOcorrencia);
  }
  getCodOcorrenciaById(id: number) : Observable<CodOcorrencia>{
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

}
