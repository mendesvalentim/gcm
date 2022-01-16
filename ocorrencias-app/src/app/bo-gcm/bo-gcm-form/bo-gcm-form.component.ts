import { Component, OnInit } from '@angular/core';
import { Ocorrencia } from '../../ocorrencias/ocorrencias';
import { BoGcm } from '../bo-gcm';

import { OcorrenciasService } from '../../ocorrencias.service';
import { BoGcmService } from '../../bo-gcm.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bo-gcm-form',
  templateUrl: './bo-gcm-form.component.html',
  styleUrls: ['./bo-gcm-form.component.css']
})
export class BoGcmFormComponent implements OnInit {

  ocorrencias: Ocorrencia[] = [] 
  boGcm: BoGcm; 
  success: boolean = false;
  errors: String[];

  constructor(
    private ocorrenciaService: OcorrenciasService,
    private router: Router,    
    private service: BoGcmService
  ) { 
    this.boGcm  = new BoGcm();
    this.errors = [];
  }

  ngOnInit(): void {
    this.ocorrenciaService
    .getAllOcorrencias().subscribe(response => this.ocorrencias = response);
  }

  onSubmit(){
    console.log(this.boGcm)
    this.service
        .salvar(this.boGcm)
        .subscribe( response => {
          this.success = true;
          this.errors = [];
          this.boGcm = new BoGcm;
        } , errorResponse => {
          this.success = false;              
          this.errors = errorResponse.error.errors;  
        } )

  }

}
