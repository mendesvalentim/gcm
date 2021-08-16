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

  constructor(
    private service: OcorrenciasService, 
    private router: Router) { }

  ngOnInit(): void {
    this.service
    .getOcorrencias()
    .subscribe( resposta => this.ocorrencias = resposta );
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
