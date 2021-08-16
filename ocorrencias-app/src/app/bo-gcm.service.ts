import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { environment } from '../environments/environment';
import { BoGcm } from './bo-gcm/bo-gcm';
import { BogcmBusca } from './bo-gcm/bo-gcm-lista/bogcmBusca';

@Injectable({
  providedIn: 'root'
})
export class BoGcmService {

  apiURL: string = environment.apiUrlBase + "/api/bogcm";

  constructor(private http: HttpClient) { }

    salvar(bogcm: BoGcm) : Observable<BoGcm>{
      console.log(this.apiURL);
      console.log(bogcm);
      return this.http.post<BoGcm>(this.apiURL, bogcm);
    }

    buscar(talao: string, mes: number) : Observable<BogcmBusca[]>{
      const httpParams = new HttpParams()
                            .set("talao", talao)
                            .set("mes", mes ? mes.toString() : '');
      const url = this.apiURL + "?" + httpParams.toString();
      console.log(url);
      return this.http.get<any>(url)
    }
  
}
