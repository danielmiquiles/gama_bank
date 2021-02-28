import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

import { EsqueciSenhaService } from './esqueci-senha.service';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.css']
})
export class EsqueciSenhaComponent implements OnInit {

 
  EsqueciForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private esqueciSenha: EsqueciSenhaService
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
    this.alterarSenha()
  }

  alterarSenha(){
    const user = {
      usuario: this.EsqueciForm.value.usuario,
      senha: this.EsqueciForm.value.novaSenha
    }
    this.esqueciSenha.alterarSenha(user)
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
    this.router.navigate(['/login']);
  } 
}
