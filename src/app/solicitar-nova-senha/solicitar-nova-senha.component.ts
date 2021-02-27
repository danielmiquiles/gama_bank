import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

import { LoginService } from '../components/login/login.service';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-solicitar-nova-senha',
  templateUrl: './solicitar-nova-senha.component.html',
  styleUrls: ['./solicitar-nova-senha.component.css']
})
export class SolicitarNovaSenhaComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private authSevice: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
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
    this.signin()
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
    this.router.navigate(['']);
  } 

}
