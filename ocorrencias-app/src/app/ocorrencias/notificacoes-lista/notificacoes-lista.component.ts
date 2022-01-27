import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { Notificacoes } from 'src/app/notificacoes/notificacoes';
import { NotificacoesService } from 'src/app/notificacoes.service';

@Component({
  selector: 'app-notificacoes-lista',
  templateUrl: './notificacoes-lista.component.html',
  styleUrls: ['./notificacoes-lista.component.css']
})
export class NotificacoesListaComponent implements OnInit {
  
  notificacoes: Notificacoes[] = [];  
  page = 1;
  count = 0;
  tableSize = 30 ; 
  filterTerm!: string;    
  
  constructor(    private service: NotificacoesService, 
    private router: Router) { }

  ngOnInit(): void {
    this.service
    .getNotificacoes()
    .subscribe( resposta => this.notificacoes = resposta );
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
    .getNotificacoes()
    .subscribe( resposta =>
                  {this.notificacoes = resposta},
      error =>{
        console.log(error);
      });    
  }  

}
