import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CodocorrenciasService } from 'src/app/codocorrencias.service';
import { CodOcorrencia } from 'src/app/ocorrencias/codOcorrencia';

@Component({
  selector: 'app-cod-ocorrencia-lista',
  templateUrl: './cod-ocorrencia-lista.component.html',
  styleUrls: ['./cod-ocorrencia-lista.component.css']
})
export class CodOcorrenciaListaComponent implements OnInit {

  codocorrencias: CodOcorrencia[] = [];
  codocorrenciaSelecionada!: CodOcorrencia;
  mensagemSucesso!: String;
  mensagemErro!: String;
  filterTerm!: string;
 
  page = 1;
  count = 0;
  tableSize = 15;
  tableSizes = [20, 25, 30 ,35, 50];

  constructor(
    private service: CodocorrenciasService, 
    private router: Router) { }

  ngOnInit(): void {
    this.buscacodOcorrencias();
  }

  buscacodOcorrencias(): void{
    this.service
    .getAllCodOcorrencia()
    .subscribe( resposta =>
                  {this.codocorrencias = resposta},
      error =>{
        this.mensagemErro = 'Ocorreu um erro ao carregar os livros diários.'
      });    
  }
  
  onTableDataChange(event: any){
    this.page = event;
  }  

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  } 

  novoCadastro(){
    this.router.navigate(['/cod-ocorrencia/form'])
  }


}
