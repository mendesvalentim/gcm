import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { OcorrenciasService } from 'src/app/ocorrencias.service';
import { Ocorrencia } from '../ocorrencias';

@Component({
  selector: 'app-bo-gcm-lista',
  templateUrl: './bo-gcm-lista.component.html',
  styleUrls: ['./bo-gcm-lista.component.css']
})
export class BoGcmListaComponent implements OnInit {
  
  ocorrencias: Ocorrencia[] = [];  
  page = 1;
  count = 0;
  tableSize = 30 ; 
  filterTerm!: string;    
  
  ocorrenciaSelecionada!: Ocorrencia;
  mensagemSucesso!: String;
  mensagemErro!: String;
  tableSizes = [20, 25, 30 ,35, 50];

  constructor(    private service: OcorrenciasService, 
    private router: Router) { }

  ngOnInit(): void {
    this.buscaOcorrencias();
  }

  buscaOcorrencias(): void{
    this.service
    .getAllBoGcms()
    .subscribe( resposta =>
                  {this.ocorrencias = resposta},
      error =>{
        this.mensagemErro = 'Ocorreu um erro ao carregar as ocorrências.'
      });    
  }
  
  onTableDataChange(event: any){
    this.page = event;
  }  

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  } 

}
