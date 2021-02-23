import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ButtonsComponent } from './components/buttons/buttons.component';
import { AnnuityComponent } from './components/home/annuity/annuity.component';
import { ComplexityComponent } from './components/home/complexity/complexity.component';
import { CreateAccountFormComponent } from './components/home/create-account-form/create-account-form.component';
import { CreateAccountComponent } from './components/home/create-account/create-account.component';
import { CreditCardComponent } from './components/home/credit-card/credit-card.component';
import { SimpleLifeComponent } from './components/home/simple-life/simple-life.component';


@NgModule({
  declarations: [
    ButtonsComponent,
    CreateAccountComponent,
    CreateAccountFormComponent,
    CreditCardComponent,
    AnnuityComponent,
    ComplexityComponent,
    SimpleLifeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    ButtonsComponent,
    CreateAccountComponent,
    CreditCardComponent,
    AnnuityComponent,
    ComplexityComponent,
    SimpleLifeComponent,
    CreateAccountFormComponent
  ]
})
export class SharedModule { }
