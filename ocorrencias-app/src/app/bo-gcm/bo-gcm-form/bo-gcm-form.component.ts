import { Component, OnInit } from '@angular/core';
import { Ocorrencia } from '../../ocorrencias/ocorrencias';
import { OcorrenciasService } from '../../ocorrencias.service';
import { BoGcm } from '../bo-gcm';

@Component({
  selector: 'app-bo-gcm-form',
  templateUrl:'./bo-gcm-form.component.html',
  styleUrls: ['./bo-gcm-form.component.css']
})
export class BoGcmFormComponent implements OnInit {

  ocorrencias: Ocorrencia[] = [] 
  boGcm: BoGcm; 

  constructor(
    private ocorrenciaService: OcorrenciasService
  ) { 
    this.boGcm = new BoGcm();
  }

  ngOnInit(): void {
    this.ocorrenciaService
    .getAllOcorrencias().subscribe(response => this.ocorrencias = response);
  }

  onSubmit(){
    console.log('submit')

  }

}
