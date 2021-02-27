import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AccountCreditComponent } from './account-credit/account-credit.component';
import { CardComponent } from './card/card.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LastestReleaseComponent } from './lastest-release/lastest-release.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    DashboardComponent, 
    CardComponent, 
    AccountCreditComponent, 
    LastestReleaseComponent, SidebarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
