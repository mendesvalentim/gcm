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

  getOcorrencia() : Ocorrencia{
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
    ocorrencia.codOcorrencia = '12563';
    ocorrencia.endereco = '12563';
    ocorrencia.motorista = '12563';
    ocorrencia.kmInicial = '12563';
    ocorrencia.kmFinal = '12563';
    //ocorrencia.horaInicial =
    //ocorrencia.horaFinal = 12:53;
    ocorrencia.auxiliar1 = '12563';
    ocorrencia.encarregadoVtr = 'valentim';
    ocorrencia.obs = 'asdçljlkdaslkjdsalkjlkdjlkjdlkajsdla';

    return ocorrencia;
  }
}
