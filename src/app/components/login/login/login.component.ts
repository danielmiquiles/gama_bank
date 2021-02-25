import { Component, ElementRef, ViewChild } from '@angular/core';

import { LoginService } from './../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('loginInput') usuarioInput: ElementRef
  @ViewChild('senhaInput') senhaInput: ElementRef

  usuario: string;
  senha: string;
  estaCarregando: boolean;
  erroNoLogin: boolean;
  router: any;

  constructor(
    private loginService: LoginService
  ) { }

  onSubmit(form){
    
    this.erroNoLogin = false
    if(!form.valid){
      form.controls.login.markAsTouched();
      form.controls.senha.markAsTouched();

      if(form.controls.usuario.invalid){
        this.usuarioInput.nativeElement.focus();
        return;
      } else {
        this.senhaInput.nativeElement.focus();
        return;
      }
    }
    this.signin()
  }

  signin(){
    const user = {"usuario": this.usuario, "senha": this.senha}
    this.estaCarregando = true;
    this.loginService.signin(user)
    .subscribe(
      response => console.log(response),
      error => {
        this.erroNoLogin = true;
      },
    )

  }

  // exibeErro(nomeControle: string, form: NgForm){
  //   if(!form.controls[nomeControle]){
  //     return false;
  //   }
  //   return form.controls[nomeControle].invalid && form.controls[nomeControle].touched;
  // }

  

}
