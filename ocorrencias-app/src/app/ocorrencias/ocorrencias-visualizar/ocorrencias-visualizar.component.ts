import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OcorrenciasService } from 'src/app/ocorrencias.service';
import { Ocorrencia } from '../ocorrencias';

import { Select2OptionData } from 'ng-select2';
import { Options } from "select2";
import { CodocorrenciasService } from 'src/app/codocorrencias.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-ocorrencias-visualizar',
  templateUrl: './ocorrencias-visualizar.component.html',
  styleUrls: ['./ocorrencias-visualizar.component.css']
})
export class OcorrenciasVisualizarComponent implements OnInit {

  ocorrencia: Ocorrencia;
  success: boolean = false;
  errors!: String[];
  id!: number;
  public codigosOcorrencia: Array<Select2OptionData>; 
  public options: Options;   

  constructor( 
    private authService: AuthService,
    private service: OcorrenciasService,
    private codOcorrenciaService: CodocorrenciasService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { 

    this.ocorrencia = new Ocorrencia;      

    }

  ngOnInit(): void {
    this.buscaCodigoOcorrencia();
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams =>{
      this.id = urlParams['id'];
      console.log(this.id);
      if(this.id){
      this.service
        .getOcorrenciaById(this.id)
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
}
