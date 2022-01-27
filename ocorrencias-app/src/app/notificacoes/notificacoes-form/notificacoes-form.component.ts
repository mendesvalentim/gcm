import { Component, OnInit } from '@angular/core';
import { NotificacoesService } from '../../notificacoes.service';
import { Notificacoes } from '../notificacoes';

@Component({
  selector: 'app-notificacoes-form',
  templateUrl:'./notificacoes-form.component.html',
  styleUrls: ['./notificacoes-form.component.css']
})
export class NotificacoesFormComponent implements OnInit {

  notificacoes: Notificacoes[] = []
  notificao: Notificacoes; 
  
  constructor(
    private notificacoesService: NotificacoesService
  ) { 
    this.notificao = new Notificacoes();
  }

  ngOnInit(): void {
    this.notificacoesService
    .getNotificacoes().subscribe(response => this.notificacoes = response);
  }

  onSubmit(){
    console.log('submit')

  }

}
