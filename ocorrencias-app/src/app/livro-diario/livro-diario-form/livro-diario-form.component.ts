import { Component, OnInit } from '@angular/core';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Livro } from '../livro';
import { AuthService } from 'src/app/auth.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LivroDiarioService } from 'src/app/livro-diario.service';

@Component({
  selector: 'app-livro-diario-form',
  templateUrl: './livro-diario-form.component.html',
  styleUrls: ['./livro-diario-form.component.css']
})
export class LivroDiarioFormComponent implements OnInit {
  
  form: FormGroup;
  livro : Livro;
  success: boolean = false;
  errors!: String[];  
  id!: number;  

  config1: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '5rem',
    maxHeight: '15rem',
    placeholder: 'Insira o texto aqui...',
    translate: 'no',
    sanitize: false,
    // toolbarPosition: 'top',
    outline: true,
    defaultFontName: 'Comic Sans MS',
    defaultFontSize: '5',
    // showToolbar: false,
    defaultParagraphSeparator: 'p',
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };

  constructor(private formBuilder: FormBuilder, 
              private authService: AuthService,
              private service: LivroDiarioService,
              private router: Router,
              private activatedRoute: ActivatedRoute              ) {
    this.livro = this.criaNovoLivro()
  }

  ngOnInit() {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams =>{
      this.id = urlParams['id'];   
      if(this.id){
        this.buscaLivroPorId(this.id)      
      }})   
    this.form = this.formBuilder.group({
      signature: ['', Validators.required]
    });
    console.log(this.livro.texto);
  }

  criaNovoLivro(){
    var livro = new Livro;
    this.errors = [];    
    this.success = false;
    livro.usuario = this.authService.getUsuarioAutenticado();
    livro.status = true;
    livro.data = this.dataAtual();
    
    return livro;
  }

  buscaLivroPorId(id: number) {
    this.service
    .getLivroById(id)
    .subscribe(
        response => {
          this.livro = response
        },errorResponse => {

       })  
  }

  dataAtual(){
    var data  = new Date();
    var dia   = String(data.getDate()).padStart(2, '0');
    var mes   = String(data.getMonth() + 1).padStart(2, '0');
    var ano   = data.getFullYear();
    return  dia + '/' + mes + '/' + ano; 
  }
  
  onSubmit(){    
    if(this.id){
       this.atualizaLivro();      
    }else{
      this.salvaLivro();           
      } 
  }

  salvaLivro(){
    console.log(this.livro);
    this.service
    .salvar(this.livro)
    .subscribe( response => {
      this.success = true;
      this.errors = [];
      this.livro = response;
    } , errorResponse => {
      this.success = false;              
      this.errors = errorResponse.error.errors;  
    })     
  };

  atualizaLivro(){ 
    console.log(this.livro);    
  this.service
    .atualizar(this.livro)
    .subscribe(response =>{
      this.success = true;
        this.errors = []; 
    }, errorResponse =>{
       this.errors = ['Erro ao atualizar livro.']
    })    

  };
  voltarParaListagem(){
    this.router.navigate(['/livro-diario/lista'])
  }
 
  onChange2(event) {
    this.texto = this.form.value;
  }  
}

