import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

import { AuthService } from './../../../shared/services/auth.service';
import { LoginService } from './../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSpinner = false;

  constructor(
    private loginService: LoginService,
    private authSevice: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.criarFormularioDeLogin();
  }

  criarFormularioDeLogin() {
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  onSubmit(){
    if(!this.loginForm.valid){
      return;
    }
    this.isSpinner = true;
    this.signin()
  }

  exibeErro(nomeControle: string) {
    if (!this.loginForm.get(nomeControle)) {
      return false;
    }
    return this.loginForm.get(nomeControle).invalid && this.loginForm.get(nomeControle).touched;
  }


  signin(){
    this.loginService.signin(this.loginForm.value)
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
    this.router.navigate(['/#/dashboard/accounts']);
  } 

}
