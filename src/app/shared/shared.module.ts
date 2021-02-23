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
import { InputsComponent } from './components/inputs/inputs.component';


@NgModule({
  declarations: [
    ButtonsComponent,
    InputsComponent,
    CreateAccountComponent,
    AccountComponent,
    CreditCardComponent,
    AnnuityComponent,
    ComplexityComponent,
    SimpleLifeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ButtonsComponent,
    InputsComponent,
    CreateAccountComponent,
    AccountComponent,
    CreditCardComponent,
    AnnuityComponent,
    ComplexityComponent,
    SimpleLifeComponent
  ]
})
export class SharedModule { }
