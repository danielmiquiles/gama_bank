import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.css']
})
export class CreateAccountFormComponent implements OnInit {

  userForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
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
}
