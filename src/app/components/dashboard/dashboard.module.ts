import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './card/card.component';
import { AccountCreditComponent } from './account-credit/account-credit.component';
import { LastestReleaseComponent } from './lastest-release/lastest-release.component';


@NgModule({
  declarations: [DashboardComponent, CardComponent, AccountCreditComponent, LastestReleaseComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
