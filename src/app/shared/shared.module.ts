import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonsComponent } from './components/buttons/buttons.component';
import { InputsComponent } from './components/inputs/inputs.component';


@NgModule({
  declarations: [
    ButtonsComponent,
    InputsComponent
  ],
  imports: [
    CommonModule,
    ButtonsComponent,
    InputsComponent
  ]
})
export class SharedModule { }
