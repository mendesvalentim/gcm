import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CodocorrenciasService } from 'src/app/codocorrencias.service';
import { CodOcorrencia } from 'src/app/ocorrencias/codOcorrencia';

@Component({
  selector: 'app-cod-ocorrencia-form',
  templateUrl: './cod-ocorrencia-form.component.html',
  styleUrls: ['./cod-ocorrencia-form.component.css']
})
export class CodOcorrenciaFormComponent implements OnInit {
  
  codocorrencia: CodOcorrencia;
  success: boolean = false;
  errors!: String[];
  id!: number;  

  constructor(
     private codOcorrenciaService: CodocorrenciasService,
     private router: Router,
     private activatedRoute: ActivatedRoute     
    ) { 
      this.codocorrencia = this.novocodOcorrencia();       
    }

  novocodOcorrencia(){
    var codocorrencia = new CodOcorrencia;
    this.errors = [];    
    this.success = false;

    return codocorrencia;
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams =>{
      this.id = urlParams['id'];   
      if(this.id){
        this.buscaOcorrenciaPorId(this.id)      
      }
    })   
  }

  buscaOcorrenciaPorId(id: number) {
    this.codOcorrenciaService
    .getCodOcorrenciaById(this.id)
    .subscribe(
        response => {
          this.codocorrencia = response
        },errorResponse => {
           this.errors = ['Falha ao buscar ocorrência!']                      
       })  
  }

  onSubmit(){
    if(this.id){
      this.codOcorrenciaService
        .atualizar(this.codocorrencia)
        .subscribe(response =>{
          this.success = true;
            this.errors = []; 
        }, errorResponse =>{
           this.errors = ['Erro ao atualizar Código de ocorrência.']
        })

    }else{
    
    this.codOcorrenciaService
      .salvar(this.codocorrencia)
      .subscribe( response => {
        this.success = true;
        this.errors = [];
        this.codocorrencia = response;
      } , errorResponse => {
        this.success = false;              
        this.errors = errorResponse.error.errors;  
      })
    }
  } 
  voltarParaListagem(){
    this.router.navigate(['/cod-ocorrencia/lista'])
  }
  
  novoCadastro(){
    this.codocorrencia = this.novocodOcorrencia();   
  }

}
