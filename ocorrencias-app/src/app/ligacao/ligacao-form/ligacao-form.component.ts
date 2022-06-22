import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

import { Ligacao } from '../ligacao';
import { OcorrenciasService } from '../../ocorrencias.service';
import { Observable, pipe } from 'rxjs';
import { Select2OptionData } from 'ng-select2';
import { Options } from "select2";

import { CodocorrenciasService } from 'src/app/codocorrencias.service';
import { LigacaoService } from 'src/app/Ligacao.service';


@Component({
  selector: 'app-ocorrenciasform',
  templateUrl: './ligacao-form.component.html',
  styleUrls: ['./ligacao-form.component.css']
})
export class LigacaoformComponent implements OnInit {

  public codigosOcorrencia: Array<Select2OptionData>; 
  public options: Options;   

  codigo: Select2OptionData;
  ligacao: Ligacao;
  success: boolean = false;
  errors!: String[];
  id!: number;
  
  constructor( 
    private authService: AuthService,
    private service: LigacaoService,
    private codOcorrenciaService: CodocorrenciasService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ){  
    this.ligacao = this.novaLigacao();      
  }


  novaLigacao(){
    var liacao = new Ligacao;
    this.errors = [];    
    this.success = false;
    liacao.usuario = this.authService.getUsuarioAutenticado();
    liacao.status = true;
    liacao.dataLigacao = this.dataAtual();
    liacao.horaInicial = this.horaAtual();

    return liacao;
  }

  ngOnInit(): void {
    this.buscaCodigoOcorrencia();
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams =>{
      this.id = urlParams['id'];   
      if(this.id){
        this.buscaLigacaoPorId(this.id)}
    })   
  }

  buscaCodigoOcorrencia(): void {
    this.codOcorrenciaService
    .getAllCodOcorrenciaSelect2()
    .subscribe(
      response =>{ this.codigosOcorrencia = response});

    this.options = {
      loading: true,
      teme:'classic',
      width: "100%"
    };     
  };

  voltarParaListagem(){
    this.router.navigate(['/ligacao/lista'])
  }
  
  novoCadastro(){
    this.ligacao = this.novaLigacao();
  }

  proximoTalao(){
    var id: number;
    id = Number(this.id) + 1;
    this.id = id;
    this.buscaLigacaoPorId(this.id);
  }

  talaoAnterior(){
    var id: number;
    id = Number(this.id) - 1;
    this.id = id;
    this.buscaLigacaoPorId(this.id);
  }

  buscaLigacaoPorId(id: number) {
    this.service
    .getLigacaoById(this.id)
    .subscribe(
        response => {
          this.ligacao = response
        },errorResponse => {
          {
            this.errors = ['Falha ao buscar Ligação!']           
          } 
       })  
  }

  async onSubmit(){
    if(this.id){
      await this.atualizaLigacao();      
    } 
    else {
        this.salvaLigacao();     
      }
  }

 async atualizaLigacao(){
    this.service
    .atualizar(this.ligacao)
    .subscribe(response =>{
      this.success = true;
      this.errors = []; 
      this.ligacao = response;
    }, errorResponse =>{
       this.errors = ['Erro ao atualizar ligação.']
    })    
  }

  salvaLigacao(){  
    this.service
      .salvar(this.ligacao)
      .subscribe( response => {
        this.success = true;
        this.errors = [];
        this.ligacao = response;
        this.id = response.id;
      } , errorResponse => {
        this.success = false;              
        this.errors = errorResponse.error.errors;  
      });
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


