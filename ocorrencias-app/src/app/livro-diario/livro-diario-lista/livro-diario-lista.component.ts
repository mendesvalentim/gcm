import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LivroDiarioService } from 'src/app/livro-diario.service';

@Component({
  selector: 'app-livro-diario-lista',
  templateUrl: './livro-diario-lista.component.html',
  styleUrls: ['./livro-diario-lista.component.css']
})
export class LivroDiarioListaComponent implements OnInit {
  mensagemSucesso!: String;
  mensagemErro!: String;
  filterTerm!: string;
 
  page = 1;
  count = 0;
  tableSize = 15;
  tableSizes = [20, 25, 30 ,35, 50];  

  constructor(
    private service: LivroDiarioService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  onTableDataChange(event: any){
    this.page = event;    
  }  

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  } 

  novoCadastro(){
    this.router.navigate(['/livro/form'])
  }


}
