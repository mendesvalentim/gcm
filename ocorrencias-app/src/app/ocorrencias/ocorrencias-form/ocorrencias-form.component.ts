import { Component, OnInit } from '@angular/core';
import { Ocorrencia } from '../ocorrencias';

@Component({
  selector: 'app-ocorrenciasform',
  templateUrl: './ocorrencias-form.component.html',
  styleUrls: ['./ocorrencias-form.component.css']
})
export class OcorrenciasformComponent implements OnInit {

  ocorrencia: Ocorrencia;

  constructor() { 
    this.ocorrencia =new Ocorrencia();
 
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.ocorrencia);
  }

}
