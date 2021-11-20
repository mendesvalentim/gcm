import { Component, OnInit } from '@angular/core';
import { OcorrenciasService } from 'src/app/ocorrencias.service';
import { Ocorrencia } from '../ocorrencias';
import { Router } from  '@angular/router'

@Component({
  selector: 'app-ocorrencias-lista',
  templateUrl: './ocorrencias-lista.component.html',
  styleUrls: ['./ocorrencias-lista.component.css']
})
export class OcorrenciasListaComponent implements OnInit {
  
  ocorrencias: Ocorrencia[] = [];
  ocorrenciaSelecionada!: Ocorrencia;
  mensagemSucesso!: String;
  mensagemErro!: String;
  filterTerm!: string;
 
  page = 1;
  count = 0;
  tableSize = 15;
  tableSizes = [20, 25, 30 ,35, 50];

  constructor(
    private service: OcorrenciasService, 
    private router: Router) { }

  ngOnInit(): void {
    this.buscaOcorrencias();
  }

  buscaOcorrencias(): void{
    this.service
    .getAllOcorrencias()
    .subscribe( resposta =>
                  {this.ocorrencias = resposta},
      error =>{
        this.mensagemErro = 'Ocorreu um erro ao carregar as ocorrências.'
      });    
  }
  
  onTableDataChange(event: any){
    this.page = event;
    this.buscaOcorrencias();
  }  

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.buscaOcorrencias();
  } 

  geraRelatorio(){
    var ocorrencia = new Ocorrencia;
    this.ocorrenciaSelecionada = ocorrencia; 

  }

  novoCadastro(){
    this.router.navigate(['/ocorrencias/form'])
  }

  preparaDelecao(ocorrencia: Ocorrencia){
    this.ocorrenciaSelecionada = ocorrencia;
  }

  deletarOcorrencia(){
    this.service
     .deletar(this.ocorrenciaSelecionada)
     .subscribe( 
       response => {
         this.mensagemSucesso = 'Talão deletado com sucesso!'
         this.ngOnInit(); 
      },
       erro => this.mensagemErro = 'Ocorreu um erro ao deletar o Talão.'
     ) 
  }

}
