import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BoGcm } from './bo-gcm/bo-gcm';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class BoGcmService {

  apiURL: string = environment.apiUrlBase + '/api/bogcm';

  constructor( private http: HttpClient) {

  }
   
  getBoGcms() : Observable<BoGcm[]> {
    return this.http.get<BoGcm[]>(`${this.apiURL}`);
  }
  
}
