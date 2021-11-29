import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/auth.service';
import { SinespService } from 'src/app/sinesp.service';
import { Sinesp } from '../sinesp';

@Component({
  selector: 'app-sinesp-form',
  templateUrl: './sinesp-form.component.html',
  styleUrls: ['./sinesp-form.component.css']
})
export class SinespFormComponent implements OnInit {

  consultaSinesp: Sinesp;
  success: boolean = false;
  errors!: String[];
  id!: number;

  constructor(
    private authService: AuthService,
    private service: SinespService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) { 
    this.consultaSinesp = this.novaConsulta();
  }

  ngOnInit(): void { 
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams =>{
      this.id = urlParams['id'];   
      if(this.id){
        this.buscaConsultaPorId(this.id, false)      
      }
    }) 
   }  

   buscaConsultaPorId(id: number, proximotalao: boolean) {
    this.service
    .getConsultaSinespById(this.id)
    .subscribe(
        response => this.consultaSinesp = response,
        errorResponse => {
          this.errors = ['Falha ao buscar dados!']           
       })  
  }   

  novaConsulta(){
    var consulta = new Sinesp;
    this.errors = [];    
    this.success = false;
    consulta.usuario = this.authService.getUsuarioAutenticado();
    consulta.data = this.dataAtual();
    consulta.hora = this.horaAtual();

    return consulta;
  }

  dataAtual(){
    var data  = new Date();
    var dia   = String(data.getDate()).padStart(2, '0');
    var mes   = String(data.getMonth() + 1).padStart(2, '0');
    var ano   = data.getFullYear();
    return  dia + '/' + mes + '/' + ano; 
  }

  horaAtual() {
    var data = new Date();
    var horas = new Date().getHours();
    if (horas < 10) {
      //@ts-ignore
        horas = "0" + horas;
    }
    var minutos = new Date().getMinutes();
    if (minutos < 10) {
        //@ts-ignore     
        minutos = "0" + minutos;
    }
    var result = horas + ":" + minutos;
    return result;
  }

  onSubmit(){
    if(this.id){
      this.service
        .atualizar(this.consultaSinesp)
        .subscribe(response =>{
          this.success = true;
            this.errors = []; 
        }, errorResponse =>{
           this.errors = ['Erro ao atualizar ocorrência.']
        })

    }else{
    
    this.service
      .salvar(this.consultaSinesp)
      .subscribe( response => {
        this.success = true;
        this.errors = [];
        this.consultaSinesp = response;
      } , errorResponse => {
        this.success = false;              
        this.errors = errorResponse.error.errors;  
      })
    }
  }
     
  voltarParaLista(){
      this.router.navigate(['/sinesp/lista'])
  }


  novoCadastro(){
    this.consultaSinesp = this.novaConsulta();   
  }
}

