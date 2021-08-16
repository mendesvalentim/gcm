import { Component, OnInit } from '@angular/core';
import { BoGcmService } from '../../bo-gcm.service';
import { BogcmBusca } from './bogcmBusca';

@Component({
  selector: 'app-bo-gcm-lista',
  templateUrl: './bo-gcm-lista.component.html',
  styleUrls: ['./bo-gcm-lista.component.css']
})
export class BoGcmListaComponent implements OnInit {

  talao: string;
  mes: number;
  meses: number[];
  lista: BogcmBusca[];
  message: string
  
  constructor(
    private service: BoGcmService) 
    {
    this.meses = [1,2,3,4,5,6,7,8,9,10,11,12];
    this.talao = "";
    this.mes = 0;
    this.lista = [];
    this.message = "";
  }

  ngOnInit(): void {}

  consultar(){
    this.service.buscar(this.talao, this.mes)
    .subscribe(response => {
      this.lista = response;
      if(this.lista.length <= 0 ){
        this.message = "Nenhum registro encontrado";
      }else{
        this.message = '';
      }
    
      })
  }

}
