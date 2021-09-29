import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Ocorrencia } from '../ocorrencias';
import { OcorrenciasService } from '../../ocorrencias.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ocorrenciasform',
  templateUrl: './ocorrencias-form.component.html',
  styleUrls: ['./ocorrencias-form.component.css']
})
export class OcorrenciasformComponent implements OnInit {

  ocorrencia: Ocorrencia;
  success: boolean = false;
  errors!: String[];
  id!: number;
  
  constructor( 
    private service: OcorrenciasService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ){  
    this.ocorrencia = this.novaOcorrencia();      
  }

  gerarNumeroBoGcm(){
    this.service
      .buscaUltimoBoGcm()
      .subscribe(response => 
      this.ocorrencia.boGcm = response 
    )
        
  }

  novaOcorrencia(){
    var ocorrencia = new Ocorrencia;
    this.errors = [];    
    this.success = false;
    ocorrencia.status = true;
    ocorrencia.dataOcorrencia = this.dataAtual();
    ocorrencia.horaInicial = this.horaAtual();

    return ocorrencia;
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams =>{
      this.id = urlParams['id'];
      if(this.id){
      this.service
        .getOcorrenciaById(this.id)
        .subscribe(
            response => this.ocorrencia = response,
            errorResponse => this.ocorrencia = new Ocorrencia()
          )
         
      }else{ this.service
        .buscaUltimoTalao()
        .subscribe(response => 
          this.ocorrencia.numeroTalao = response 
          )
      }
    })   
  }

  voltarParaListagem(){
    this.router.navigate(['/ocorrencias-lista'])
  }
  
  novoCadastro(){
    console.log(this.ocorrencia.numeroTalao)
    this.ocorrencia = this.novaOcorrencia();
    this.ngOnInit();    
  }

  onSubmit(){
    if(this.id){
      console.log(this.ocorrencia.status);
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

  dataAtual(){
    var data  = new Date();
    var dia   = String(data.getDate()).padStart(2, '0');
    var mes   = String(data.getMonth() + 1).padStart(2, '0');
    var ano   = data.getFullYear();
    return  dia + '/' + mes + '/' + ano; 
  }

  horaAtual() {
    var data = new Date();
    var horas = new Date().getHours();
    if (horas < 10) {
      //@ts-ignore
        horas = "0" + horas;
    }
    var minutos = new Date().getMinutes();
    if (minutos < 10) {
        //@ts-ignore     
        minutos = "0" + minutos;
    }
    var result = horas + ":" + minutos;
    return result;
  }
  

}
