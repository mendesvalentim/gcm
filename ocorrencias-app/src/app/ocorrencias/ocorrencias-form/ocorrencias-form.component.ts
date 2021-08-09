import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
  id!: number;
  

  constructor( 
    private service: OcorrenciasService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ){ 
    this.ocorrencia = new Ocorrencia;
    this.errors = [];
  }

  ngOnInit(): void {
    let params = this.activatedRoute.params
   // @ts-ignore    
    if(params && params.value && params.value.id){
   // @ts-ignore      
      this.id = params.value.id;
      this.service
        .getClienteById(this.id)
        .subscribe(
            response => this.ocorrencia = response ,
            errorResponse => this.ocorrencia = new Ocorrencia()
      )
    }   
  }

  voltarParaListagem(){
    this.router.navigate(['/ocorrencias-lista'])
  }

  onSubmit(){
    if(this.id){
      this.service
        .atualizar(this.ocorrencia)
        .subscribe(response =>{
          this.success = true;
            this.errors = []; 
        }, errorResponse =>{
           this.errors = ['Erro ao atualizar ocorrência.']
        })

    }else{

    
    this.service
      .salvar(this.ocorrencia)
      .subscribe( response => {
        this.success = true;
        this.errors = [];
        this.ocorrencia = response;
      } , errorResponse => {
        this.success = false;              
        this.errors = errorResponse.error.errors;  
      })
    }
  }   
  

}
