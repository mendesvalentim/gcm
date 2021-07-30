import { Injectable } from '@angular/core';
import { Ocorrencia } from './ocorrencias/ocorrencias';

@Injectable({
  providedIn: 'root'
})
export class OcorrenciasService {

  constructor() { }

  getOcorrencia() : Ocorrencia{
    let ocorrencia: Ocorrencia = new Ocorrencia;
    ocorrencia.dataOcorrencia = '123456';
    ocorrencia.viatura = '94127';
    ocorrencia.numeroTalao = 123456;
    return ocorrencia;
  }
}
