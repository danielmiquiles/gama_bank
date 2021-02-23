import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ButtonsComponent } from './components/buttons/buttons.component';
import { AccountComponent } from './components/home/account/account.component';
import { AnnuityComponent } from './components/home/annuity/annuity.component';
import { ComplexityComponent } from './components/home/complexity/complexity.component';
import { CreateAccountComponent } from './components/home/create-account/create-account.component';
import { CreditCardComponent } from './components/home/credit-card/credit-card.component';
import { SimpleLifeComponent } from './components/home/simple-life/simple-life.component';
import { CompleteNameComponent } from './components/inputs/complete-name/complete-name.component';
import { ConfirmPasswordComponent } from './components/inputs/confirm-password/confirm-password.component';
import { InputCpfComponent } from './components/inputs/input-cpf/input-cpf.component';
import { PasswordComponent } from './components/inputs/password/password.component';
import { UserNameComponent } from './components/inputs/user-name/user-name.component';


@NgModule({
  declarations: [
    ButtonsComponent,
    CreateAccountComponent,
    AccountComponent,
    CreditCardComponent,
    AnnuityComponent,
    ComplexityComponent,
    SimpleLifeComponent,
    InputCpfComponent,
    UserNameComponent,
    PasswordComponent,
    CompleteNameComponent,
    ConfirmPasswordComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ButtonsComponent,
    CreateAccountComponent,
    AccountComponent,
    CreditCardComponent,
    AnnuityComponent,
    ComplexityComponent,
    SimpleLifeComponent,
    InputCpfComponent,
    UserNameComponent,
    PasswordComponent,
    CompleteNameComponent,
    ConfirmPasswordComponent,
  ]
})
export class SharedModule { }
