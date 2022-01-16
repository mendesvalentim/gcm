import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Select2OptionData } from 'ng-select2';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CodocorrenciasService {

  apiURL: string = environment.apiUrlBase + '/api/codocorrencias';

  constructor( private http: HttpClient) { }

  getAllCodOcorrencia(): Observable<Select2OptionData[]> {
    return this.http.get<Select2OptionData[]>(`${this.apiURL}`);      
  }
}
