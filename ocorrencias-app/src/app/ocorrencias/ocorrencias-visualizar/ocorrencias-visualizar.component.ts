import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OcorrenciasService } from 'src/app/ocorrencias.service';
import { Ocorrencia } from '../ocorrencias';

@Component({
  selector: 'app-ocorrencias-visualizar',
  templateUrl: './ocorrencias-visualizar.component.html',
  styleUrls: ['./ocorrencias-visualizar.component.css']
})
export class OcorrenciasVisualizarComponent implements OnInit {

  ocorrencia: Ocorrencia;
  success: boolean = false;
  errors!: String[];
  id!: number;

  constructor( 
    private service: OcorrenciasService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { 

    this.ocorrencia = new Ocorrencia;      

    }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams =>{
      this.id = urlParams['id'];
      console.log(this.id);
      if(this.id){
      this.service
        .getOcorrenciaById(this.id)
        .subscribe(
            response => this.ocorrencia = response ,
            errorResponse => this.ocorrencia = new Ocorrencia()
          )
      }
    })   
  }

  voltarParaListagem(){
    this.router.navigate(['/ocorrencias/lista'])
  }
  
}
