import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { AnnuityComponent } from '../annuity/annuity.component';
import { ComplexityComponent } from '../complexity/complexity.component';
import { CreateAccountFormComponent } from '../create-account-form/create-account-form.component';
import { CreateAccountComponent } from '../create-account/create-account.component';
import { CreditCardComponent } from '../credit-card/credit-card.component';
import { SimpleLifeComponent } from '../simple-life/simple-life.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent,
    CreateAccountComponent,
    CreditCardComponent,
    AnnuityComponent,
    ComplexityComponent,
    SimpleLifeComponent,
    CreateAccountFormComponent,    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent,
      CreateAccountComponent,
      CreditCardComponent,
      AnnuityComponent,
      ComplexityComponent,
      SimpleLifeComponent,
      CreateAccountFormComponent,
  ]

})
export class HomeModule { }
