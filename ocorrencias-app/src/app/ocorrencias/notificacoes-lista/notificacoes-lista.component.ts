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
  tableSizes = [20, 25, 30 ,35, 50]; 
  
  mensagemSucesso!: String;
  mensagemErro!: String;
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
  }  

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  } 

  novoCadastro(){
    this.router.navigate(['/notificacoes/form'])
  }

}
