import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Ocorrencia } from '../ocorrencias';
import { OcorrenciasService } from '../../ocorrencias.service';
import { Observable } from 'rxjs';
import { getLocaleDateTimeFormat } from '@angular/common';



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
    this.ocorrencia.dataOcorrencia = this.dataAtual();
   
    this.errors = [];
  }

  dataAtual(){
    var data  = new Date();
    var dia   = String(data.getDate()).padStart(2, '0');
    var mes   = String(data.getMonth() + 1).padStart(2, '0');
    var ano   = data.getFullYear();
    return  dia + '/' + mes + '/' + ano; 
  }
   ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams =>{
      this.id = urlParams['id'];
      if(this.id){
      this.service
        .getClienteById(this.id)
        .subscribe(
            response => this.ocorrencia = response ,
            errorResponse => this.ocorrencia = new Ocorrencia()
          )
      }    
    })   
  }

  voltarParaListagem(){
    this.router.navigate(['/ocorrencias/lista'])
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
