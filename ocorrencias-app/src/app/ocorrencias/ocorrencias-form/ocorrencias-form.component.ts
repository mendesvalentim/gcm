import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

import { Ocorrencia } from '../ocorrencias';
import { OcorrenciasService } from '../../ocorrencias.service';
import { Observable, pipe } from 'rxjs';
import { Select2OptionData } from 'ng-select2';
import { Options } from "select2";

import { CodocorrenciasService } from 'src/app/codocorrencias.service';
import { Notificacoes } from 'src/app/notificacoes/notificacoes';


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
           this.errors = ['N??o existe pr??xima ocorr??ncia criada!']
          }else{
            this.errors = ['Falha ao buscar ocorr??ncia!']           
          } 
       })  
  }

  async onSubmit(){
    if(this.id){
      await this.atualizaNotificacao();           
      await this.atualizaOcorrencia();      
    }else{
      if(this.heNotificacao()){  
        const notificacao = await  this.preparaSalvamentoNoficacao();         
        this.ocorrencia.pertubacao  = notificacao.id;}
      } 
      this.salvaOcorrencia();     
  }
  
  async preparaSalvamentoNoficacao(){
    if(this.heNotificacao()){             
      return await this.criaHeSalvaNotificacao();           
    }  
  }

  heNotificacao(){
   if (this.ocorrencia.idCodOcorrencia == 59 || this.ocorrencia.idCodOcorrencia  == 66 || 
      this.ocorrencia.idCodOcorrencia  == 253|| this.ocorrencia.idCodOcorrencia  == 251 ){
      return true;
    }else{ 
      return false}    
 }

 async atualizaOcorrencia(){
    this.service
    .atualizar(this.ocorrencia)
    .subscribe(response =>{
      this.success = true;
      this.errors = []; 
      this.ocorrencia = response;
    }, errorResponse =>{
       this.errors = ['Erro ao atualizar ocorr??ncia.']
    })    
  }

  async atualizaNotificacao(){
    if(this.ocorrencia.pertubacao){
      if(!this.heNotificacao()){
        await this.deletaNotificacao();        
      }else{   
          var notificacao = new Notificacoes;    
          this.criaNotificao(notificacao); 
          this.service
          .atualizarNotificacao(notificacao)
          .subscribe(response =>{
            this.success = true;
            this.errors = []; 
          }, errorResponse =>{
            this.errors = ['Erro ao atualizar ocorr??ncia.']
          })       
      }  
    }else{
      if(this.heNotificacao()){             
       const notificacao = await this.criaHeSalvaNotificacao();   
       this.ocorrencia.pertubacao  = notificacao.id;
    }
   }
  }

  async deletaNotificacao(){    
    var notificacao = new Notificacoes;    
    this.criaNotificao(notificacao);    
    this.ocorrencia.pertubacao = null;    
    this.service
      .deletarNotificacao(notificacao)
      .subscribe(response =>{
        this.success = true;
        this.errors = []; 
      }, errorResponse =>{
        this.errors = ['Erro ao atualizar ocorr??ncia.']
      })        
  }

  async criaHeSalvaNotificacao(){
    var notificacao = new Notificacoes;    
    this.criaNotificao(notificacao);    

    return await this.salvaNotificacao(notificacao);
  }

  criaNotificao(notificacao: Notificacoes){          
    notificacao.id               = this.ocorrencia.pertubacao;
    notificacao.dataOcorrencia   = this.ocorrencia.dataOcorrencia;
    notificacao.numeroBoGcm      = this.ocorrencia.boGcm ? this.ocorrencia.boGcm.toString() : '' ;
    notificacao.endereco         = this.ocorrencia.endereco;
    notificacao.notificacao      = this.ocorrencia.notificacao;     
    notificacao.atuacao          = this.ocorrencia.autuacao ? this.ocorrencia.autuacao.toString() : '';
    notificacao.legislacao       = this.ocorrencia.legislacao;
    notificacao.nomeProprietario = this.ocorrencia.proprietario; 

  }

  async salvaNotificacao(notificacao: Notificacoes): Promise<any> {
    return new Promise((resolve, reject) => {
      this.service
        .salvarNotificacao(notificacao)
        .subscribe({
          next: (data) => resolve(data),
          error: (err) => reject(err),
        });
    });
  }

  salvaOcorrencia(){  
    this.service
      .salvar(this.ocorrencia)
      .subscribe( response => {
        this.success = true;
        this.errors = [];
        this.ocorrencia = response;
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


