import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SinespService } from 'src/app/sinesp.service';
import { Sinesp } from '../sinesp';

@Component({
  selector: 'app-sinesp-lista',
  templateUrl: './sinesp-lista.component.html',
  styleUrls: ['./sinesp-lista.component.css']
})
export class SinespListaComponent implements OnInit {

  listaConsultas: Sinesp[] = [];
  consultaSinespSelecionada!:Sinesp;
  mensagemSucesso!: String;
  mensagemErro!: String;
  filterTerm!: string;
 
  page = 1;
  count = 0;
  tableSize = 15;
  tableSizes = [20, 25, 30 ,35, 50];

  constructor(
    private service:SinespService, 
    private router: Router) { }

  ngOnInit(): void {
    this.buscaconsultaconsultaSinesps();
  }

  buscaconsultaconsultaSinesps(): void{
    this.service
    .getAllConsultas()
    .subscribe( resposta =>
                  {this.listaConsultas = resposta},
      error =>{
        console.log(error);
      });    
  }
  
  onTableDataChange(event: any){
    this.page = event;
    this.buscaconsultaconsultaSinesps();
  }  

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.buscaconsultaconsultaSinesps();
  } 


  novoCadastro(){
    this.router.navigate(['/sinesp/form'])
  }

  preparaDelecao(consultaSinesp: Sinesp){
    this.consultaSinespSelecionada =consultaSinesp;
  }

}
