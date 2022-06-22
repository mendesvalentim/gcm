import { Component, OnInit } from '@angular/core';
import { Ligacao } from '../ligacao';
import { Router } from  '@angular/router'
import { LigacaoService } from 'src/app/Ligacao.service';

@Component({
  selector: 'app-ligacao-lista',
  templateUrl: './ligacao-lista.component.html',
  styleUrls: ['./ligacao-lista.component.css']
})
export class LigacaoListaComponent implements OnInit {
  
  ligacoes: Ligacao[] = [];
  ligacaoSelecionada!: Ligacao;
  mensagemSucesso!: String;
  mensagemErro!: String;
  filterTerm!: string;
 
  page = 1;
  count = 0;
  tableSize = 15;
  tableSizes = [20, 25, 30 ,35, 50];

  constructor(
    private service: LigacaoService, 
    private router: Router) { }

  ngOnInit(): void {
    this.buscaOcorrencias();
  }

  buscaOcorrencias(): void{
    this.service
    .getAllLigacao()
    .subscribe( resposta =>
                  {this.ligacoes = resposta},
      error =>{
        this.mensagemErro = 'Ocorreu um erro ao carregar as Ligações.'
      });    
  }
  
  onTableDataChange(event: any){
    this.page = event;
  }  

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  } 

  geraRelatorio(){
    var ocorrencia = new Ligacao;
    this.ligacaoSelecionada = ocorrencia; 

  }

  novoCadastro(){
    this.router.navigate(['/ligacao/form'])
  }

  preparaDelecao(ligacao: Ligacao){
    this.ligacaoSelecionada = ligacao;
  }

  deletarLigacao(){
    this.service
     .deletar(this.ligacaoSelecionada)
     .subscribe( 
       response => {
         this.mensagemSucesso = 'Registro de Ligação deletado com sucesso!'
         this.ngOnInit(); 
      },
       erro => this.mensagemErro = 'Ocorreu um erro ao deletar o Ligação.'
     ) 
  }

}
