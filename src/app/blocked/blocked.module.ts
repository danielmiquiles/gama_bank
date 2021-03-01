import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BlockedRoutingModule } from './blocked-routing.module';
import { BlockedComponent } from './blocked.component';


@NgModule({
  declarations: [
    BlockedComponent,
  ],
  imports: [
    CommonModule,
    BlockedRoutingModule
  ]
})
export class BlockedModule { }
