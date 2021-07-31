import { Component, OnInit } from '@angular/core';
import { Ocorrencia } from '../ocorrencias';
import { OcorrenciasService } from '../../ocorrencias.service';

@Component({
  selector: 'app-ocorrenciasform',
  templateUrl: './ocorrencias-form.component.html',
  styleUrls: ['./ocorrencias-form.component.css']
})
export class OcorrenciasformComponent implements OnInit {

  ocorrencia: Ocorrencia;
  success: boolean = false;
  errors: String[];
  

  constructor( private service: OcorrenciasService) { 
    this.ocorrencia = new Ocorrencia;
    this.errors = [];
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service
      .salvar(this.ocorrencia)
      .subscribe( response => {
        this.success = true;
        this.errors = [];
        this.ocorrencia = response;
      } , errorResponse => {
        this.errors = errorResponse.error.errors;  
        this.success = false;              
      }      
      )  
  }

}
