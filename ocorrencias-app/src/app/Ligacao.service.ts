import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Ligacao } from './ligacao/ligacao';

@Injectable({
  providedIn: 'root'
})

export class LigacaoService {

  apiURL: string = environment.apiUrlBase + '/api/ligacoes';

  constructor( private http: HttpClient) {}
   
  salvar(ligacao: Ligacao): Observable<Ligacao>{
    return this.http.post<Ligacao>(`${this.apiURL}`, ligacao);     
  }

  atualizar(ligacao: Ligacao): Observable<any>{
    return this.http.put<Ligacao>(`${this.apiURL}/${ligacao.id}`, ligacao);
  }

  getAllLigacao() : Observable<Ligacao[]> {   
    return this.http.get<Ligacao[]>(`${this.apiURL}`);
  }

  getLigacaoById(id: number) : Observable<Ligacao>{
    return this.http.get<any>(`${this.apiURL}/${id}`);

  }

  deletar(ligacao: Ligacao): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${ligacao.id}`);        
  }
  
}
