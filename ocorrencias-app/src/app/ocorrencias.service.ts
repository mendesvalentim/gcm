import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Ocorrencia } from './ocorrencias/ocorrencias';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OcorrenciasService {

  constructor( private http: HttpClient) {

  }
   
   salvar(ocorrencia: Ocorrencia): Observable<Ocorrencia>{
     return this.http.post<Ocorrencia>('http://localhost:8080/api/ocorrencias', ocorrencia);
   }

   atualizar(ocorrencia: Ocorrencia): Observable<any>{
    return this.http.put<Ocorrencia>(`http://localhost:8080/api/ocorrencias/${ocorrencia.id}`, ocorrencia);
  }
  getOcorrencias() : Observable<Ocorrencia[]> {
    return this.http.get<Ocorrencia[]>('http://localhost:8080/api/ocorrencias');
 
  }

  getClienteById(id: number) : Observable<Ocorrencia>{
    return this.http.get<any>(`http://localhost:8080/api/ocorrencias/${id}`);

  }

  deletar(ocorrencia: Ocorrencia): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/api/ocorrencias/${ocorrencia.id}`);
  }
  

  /*getOcorrencias(): Ocorrencia[]{
    let ocorrencia: Ocorrencia = new Ocorrencia;
    
    //ocorrencia.id = 10;
    ocorrencia.idUsuario = 10;
    ocorrencia.dataOcorrencia = '12/03/2021';
    ocorrencia.codOcorrencia = 'm-01';
    ocorrencia.viatura = '94127';
    ocorrencia.numeroTalao = 123456;
    ocorrencia.boGcm = 11213;
    ocorrencia.equipe = 'A';
    ocorrencia.dataCadastro = '12563';
    ocorrencia.endereco = '12563';
    ocorrencia.motorista = '12563';
    ocorrencia.kmInicial = '12563';
    ocorrencia.kmFinal = '12563';
    //ocorrencia.horaInicial =
    //ocorrencia.horaFinal = 12:53;
    ocorrencia.auxiliar1 = '12563';
    ocorrencia.encarregadoVtr = 'valentim';
    ocorrencia.obs = 'asdçljlkdaslkjdsalkjlkdjlkjdlkajsdla';    
    return [ocorrencia];
  }*/
}
