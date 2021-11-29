import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

import { Ocorrencia } from '../ocorrencias';
import { OcorrenciasService } from '../../ocorrencias.service';
import { Observable } from 'rxjs';
import { Select2OptionData } from 'ng-select2';
import { Options } from "select2";

import { CodocorrenciasService } from 'src/app/codocorrencias.service';


@Component({
  selector: 'app-ocorrenciasform',
  templateUrl: './ocorrencias-form.component.html',
  styleUrls: ['./ocorrencias-form.component.css']
})
export class OcorrenciasformComponent implements OnInit {

  public codigosOcorrencia: Array<Select2OptionData>; 
  public options: Options;   

  codigo: Select2OptionData;
  ocorrencia: Ocorrencia;
  success: boolean = false;
  errors!: String[];
  id!: number;
  
  constructor( 
    private authService: AuthService,
    private service: OcorrenciasService,
    private codOcorrenciaService: CodocorrenciasService,
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
    ocorrencia.usuario = this.authService.getUsuarioAutenticado();
    ocorrencia.status = true;
    ocorrencia.dataOcorrencia = this.dataAtual();
    ocorrencia.horaInicial = this.horaAtual();

    return ocorrencia;
  }

  ngOnInit(): void {
    this.buscaCodigoOcorrencia();
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams =>{
      this.id = urlParams['id'];   
      if(this.id){
        this.buscaOcorrenciaPorId(this.id, false)      
      }else{ 
        this.ajustaUltimoTalao()
      }
    })   
  }


  buscaCodigoOcorrencia(): void {
    this.codOcorrenciaService
    .getAllCodOcorrencia()
    .subscribe(
      response =>{ this.codigosOcorrencia = response});

    this.options = {
      loading: true,
      teme:'classic',
      width: "100%"
    };     
  };

  voltarParaListagem(){
    this.router.navigate(['/ocorrencias/lista'])
  }
  
  novoCadastro(){
    this.ocorrencia = this.novaOcorrencia();
    this.ajustaUltimoTalao();    
  }

  proximoTalao(){
    var id: number;
    id = Number(this.id) + 1;
    this.id = id;
    this.buscaOcorrenciaPorId(this.id, true);
  }

  talaoAnterior(){
    var id: number;
    id = Number(this.id) - 1;
    this.id = id;
    this.buscaOcorrenciaPorId(this.id, false);
  }

  ajustaUltimoTalao(){
    this.service
    .buscaUltimoTalao()
    .subscribe(response => 
      this.ocorrencia.numeroTalao = response 
      )    
  }

  buscaOcorrenciaPorId(id: number, proximotalao: boolean) {
    this.service
    .getOcorrenciaById(this.id)
    .subscribe(
        response => {
          this.ocorrencia = response
        },errorResponse => {
          if(proximotalao){
           this.errors = ['Não existe próxima ocorrência criada!']
          }else{
            this.errors = ['Falha ao buscar ocorrência!']           
          } 
       })  
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


