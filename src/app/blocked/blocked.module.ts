import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlockedRoutingModule } from './blocked-routing.module';
import { BlockedComponent } from './blocked/blocked.component';


@NgModule({
  declarations: [BlockedComponent],
  imports: [
    CommonModule,
    BlockedRoutingModule
  ]
})
export class BlockedModule { }
