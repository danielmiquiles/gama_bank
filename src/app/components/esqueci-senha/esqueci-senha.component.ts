import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

import { AuthService } from '../../shared/services/auth.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.css']
})
export class EsqueciSenhaComponent implements OnInit {

 
  EsqueciForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private authSevice: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.criarFormularioDeEsqueci();
  }

  criarFormularioDeEsqueci() {
    this.EsqueciForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      novaSenha: ['', Validators.required],
      confirmaSenha: ['', Validators.required]
    });
  }

  onSubmit(){
    if(!this.EsqueciForm.valid || this.EsqueciForm.value.novaSenha !== this.EsqueciForm.value.confirmaSenha){
      return;
    }
    this.signin()
  }

  signin(){
    this.loginService.signin(this.EsqueciForm.value)
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
