import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

import { SolicitarNovaSenhaService } from './solicitar-nova-senha.service';

@Component({
  selector: 'app-solicitar-nova-senha',
  templateUrl: './solicitar-nova-senha.component.html',
  styleUrls: ['./solicitar-nova-senha.component.css']
})
export class SolicitarNovaSenhaComponent implements OnInit {

  newSenhaForm: FormGroup;

  constructor(
    private solicitarNovaSenhaService: SolicitarNovaSenhaService,    
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.criarNovaSenha();
  }

  criarNovaSenha() {
    this.newSenhaForm = this.formBuilder.group({
      login: ['', Validators.required],
      cpf: ['', Validators.required],
    });
  }

  onSubmit(){
    this.solicitarNewSenha();
  }

  solicitarNewSenha(){
    this.solicitarNovaSenhaService.solicitarNewSenha(this.newSenhaForm.value)
    .pipe(
      take(1)
    )
    .subscribe(
      response => console.log(response),      
      error => {        
        console.log(error);
      },
    )
  }

  onSuccess(){
    this.router.navigate(['']);
  } 

}




