import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.css']
})
export class CreateAccountFormComponent implements OnInit {

  @ViewChild('cpfInput') cpfInput!: ElementRef;
  @ViewChild('userNameInput') userNameInput!: ElementRef;
  @ViewChild('nameCompleteInput') nameCompleteInput!: ElementRef;
  @ViewChild('passwordInput') passwordInput!: ElementRef;
  @ViewChild('confirmPasswordInput') confirmPasswordInput!: ElementRef;

  cpf!: string;
  username!: string;
  namecomplete!: string;
  password!: string;
  confirmpassword!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form): void {
    if (!form.valid) {
      form.controls.cpf.markAsTouched();
      form.controls.userName.markAsTouched();
      form.controls.nameComplete.markAsTouched();
      form.controls.password.markAsTouched();
      form.controls.confirmPassword.markAsTouched();

      switch (form.controls.invalid) {

        case form.controls.cpf.invalid:
          this.cpfInput.nativeElement.focus();
          break;

        case form.controls.userName.invalid:
          this.cpfInput.nativeElement.focus();
          break;

        case form.controls.nameComplete.invalid:
          this.nameCompleteInput.nativeElement.focus();
          break;

        case form.controls.password.invalid:
          this.passwordInput.nativeElement.focus();
          break;

        case form.controls.confirmPassword.invalid:
          this.confirmPasswordInput.nativeElement.focus();
          break;
      }
    }
  }

  exibeErro(nomeControle: string, form: NgForm): boolean {
    if(!form.controls[nomeControle]) {
      return false;
    }
    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched;
  }
}
