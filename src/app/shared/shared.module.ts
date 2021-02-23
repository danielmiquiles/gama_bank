import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ButtonsComponent } from './components/buttons/buttons.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { InputsComponent } from './components/inputs/inputs.component';


@NgModule({
  declarations: [
    ButtonsComponent,
    InputsComponent,
    CreateAccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ButtonsComponent,
    InputsComponent,
    CreateAccountComponent
  ]
})
export class SharedModule { }
