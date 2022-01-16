import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  apiURL: string = environment.apiUrlBase + '/api/dashboard';

  constructor( private http: HttpClient) { }

  getAllDashboard(): 
    Observable<Array<any>> {
      return this.http.get<Array<any>>(`${this.apiURL}`);      
  }

  getAllDashboardDate(dataInicia: string, dataFinal: string ) : Observable<Array<any>>{
    return this.http.get<Array<any>>(`${this.apiURL}/${dataInicia}/${dataFinal}`);
    
  }
}