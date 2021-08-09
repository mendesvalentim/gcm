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

  constructor(
    private service: OcorrenciasService, 
    private router: Router) { }

  ngOnInit(): void {
    this.service
    .getOcorrencias()
    .subscribe( resposta => this.ocorrencias = resposta );
  }

  novoCadastro(){
    this.router.navigate(['/ocorrencias-form'])
  }

}
