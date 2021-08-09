import { Component, OnInit } from '@angular/core';
import { OcorrenciasService } from 'src/app/ocorrencias.service';
import { Ocorrencia } from '../ocorrencias';

@Component({
  selector: 'app-ocorrencias-lista',
  templateUrl: './ocorrencias-lista.component.html',
  styleUrls: ['./ocorrencias-lista.component.css']
})
export class OcorrenciasListaComponent implements OnInit {
  
  ocorrencias: Ocorrencia[] = [];

  constructor(private service: OcorrenciasService) { }

  ngOnInit(): void {
  }

}
