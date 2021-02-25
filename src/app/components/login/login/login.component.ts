import { Component, ElementRef, ViewChild } from '@angular/core';

import { LoginService } from './../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('loginInput') loginInput: ElementRef
  @ViewChild('senhaInput') senhaInput: ElementRef

  login: string;
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

      if(form.controls.login.invalid){
        this.loginInput.nativeElement.focus();
        return;
      } else {
        this.senhaInput.nativeElement.focus();
        return;
      }
    }
    this.signin()
  }

  signin(){
    this.estaCarregando = true;
    this.loginService.signin(this.login, this.senha)
    .pipe(
      finalize(()=> this.estaCarregando = false)
    )
    .subscribe(
      response => this.router.navigate(['dashboard']),
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
