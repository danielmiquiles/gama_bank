import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CreateAccountFormService } from './create-account-form.service';

@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.css']
})
export class CreateAccountFormComponent implements OnInit {

  userForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private createAccountService:  CreateAccountFormService
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      cpf: ['', Validators.required],
      userName: ['', Validators.required],
      fullName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    })
  }

  validateAllFormFields() {
    Object.keys(this.userForm.controls).forEach(field => {
      const control = this.userForm.get(field);
      control.markAsTouched();
    })
  }

  onSubmit() {
    if (this.userForm.invalid) {
      this.validateAllFormFields();
      return;
    }
    console.log(this.userForm.value)
  }

  exibeErro(nomeControle: string) {
    if (!this.userForm.get(nomeControle)) {
      return false;
    }
    return this.userForm.get(nomeControle).invalid && this.userForm.get(nomeControle).touched;
  }

  createUser() {
    this.createAccountService.createUser(this.userForm.value)
    .subscribe(
      response => this.onSuccess(),
      error => this.onError()
      )
      console.log('passei aqui')
  }

  onSuccess() {
    this.router.navigate(['exemplo'])
    console.log('sucesso')
  }

  onError() {
    console.error('error');
  }
}
