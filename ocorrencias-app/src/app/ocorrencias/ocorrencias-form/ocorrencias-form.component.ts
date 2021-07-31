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
  errors!: String[];
  

  constructor( private service: OcorrenciasService) { 
    this.ocorrencia = new Ocorrencia;
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service
      .salvar(this.ocorrencia)
      .subscribe( response => {
        this.success = true;
      } , errorResponse => {
        this.errors = errorResponse.console.error.errors;  
      }      
      )  
  }

}
