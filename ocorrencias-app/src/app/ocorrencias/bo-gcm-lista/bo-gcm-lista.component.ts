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

  constructor(    private service: OcorrenciasService, 
    private router: Router) { }

  ngOnInit(): void {
    this.service
    .getBoGcms()
    .subscribe( resposta => this.ocorrencias = resposta );
  }

  onTableDataChange(event: any){
    this.page = event;
    this.buscaBogcm();
  }  

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.buscaBogcm();
  } 

  buscaBogcm(): void{
    this.service
    .getBoGcms()
    .subscribe( resposta =>
                  {this.ocorrencias = resposta},
      error =>{
        console.log(error);
      });    
  }  

}
