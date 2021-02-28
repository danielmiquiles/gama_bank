import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AccountCreditComponent } from './account-credit/account-credit.component';
import { CardComponent } from './card/card.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LastestReleaseComponent } from './lastest-release/lastest-release.component';
import { PlanComponent } from './plan/plan.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CreatePlanComponent } from './create-plan/create-plan.component';


@NgModule({
  declarations: [
    DashboardComponent, 
    CardComponent, 
    AccountCreditComponent, 
    LastestReleaseComponent, 
    SidebarComponent,
    PlanComponent,
    AccountsComponent,
    CreatePlanComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
