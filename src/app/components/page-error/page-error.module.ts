import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PageErrorRoutingModule } from './page-error-routing.module';
import { PageErrorComponent } from './page-error.component';


@NgModule({
  declarations: [
    PageErrorComponent
  ],
  imports: [
    CommonModule,
    PageErrorRoutingModule,
    RouterModule
  ],
  exports: [
    PageErrorComponent
  ]
})
export class PageErrorModule { }
