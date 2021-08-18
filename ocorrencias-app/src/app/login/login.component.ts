import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Usuario } from './usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username!: string;
  password!: string;
  cadastrando!: boolean;
  mensagemSucesso!: string;
  errors!: String[] ;
  


  constructor(
    private router: Router,
    private authService: AuthService      
    ) {}

  onSubmit(){ 
    this.authService
        .tentarLogar(this.username, this.password)
        .subscribe(response => {
          const acces_token = JSON.stringify(response);
          console.log(response);          
          localStorage.setItem('acces_token', acces_token);
          this.router.navigate(['/home'])
        }, errorResponse => {
          this.errors = ['Usuário e/ou senha incorreto(s).']
        })
    this.router.navigate(['/home'])
    
  }
/*//@ts-ignore ignora linha */ 

  preparaCadastrar(event: Event){
    event.preventDefault();

    this.cadastrando = true;
  }

  cancelaCadastro(){
    this.cadastrando = false;
  }

  cadastrar(){
    const usuario: Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    this.authService
        .salvar(usuario)
        .subscribe( response => {
            this.mensagemSucesso = "Cadastro realizado com sucesso! Efetue o login.";
            this.cadastrando = false;
            this.username = "";
            this.password = "";
            this.errors = [];
        }, errorResponse =>{
          this.mensagemSucesso = "";
          this.errors = errorResponse.error.errors;          
        });
  }


}
