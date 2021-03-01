import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BlockedRoutingModule } from './blocked-routing.module';
import { BlockedComponent } from './blocked.component';
import { TransfersComponent } from './transfers/transfers/transfers.component';


@NgModule({
  declarations: [
    BlockedComponent,
    TransfersComponent, 
  ],
  imports: [
    CommonModule,
    BlockedRoutingModule
  ]
})
export class BlockedModule { }
