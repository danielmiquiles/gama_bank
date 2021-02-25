import { Router } from '@angular/router';
import { AuthService } from './../../../shared/services/auth.service';
import { ResponseAPI } from 'src/app/shared/interfaces/resposeApi.interface';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { finalize, take } from 'rxjs/operators';

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

  constructor(
    private loginService: LoginService,
    private authSevice: AuthService,
    private router: Router
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
    this.loginService.signin(user)
    .pipe(
      take(1)
    )
    .subscribe(
      _response => this.onSuccess(),
      error => {        
        console.log(error);
      },
    )
  }

  onSuccess(){
    this.router.navigate(['']);
  }

  // exibeErro(nomeControle: string, form: NgForm){
  //   if(!form.controls[nomeControle]){
  //     return false;
  //   }
  //   return form.controls[nomeControle].invalid && form.controls[nomeControle].touched;
  // }

  

}
