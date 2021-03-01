import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountsComponent } from './accounts/accounts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepositComponent } from './deposit/deposit.component';
import { PlanComponent } from './plan/plan.component';
import { TransfersComponent } from './transfers/transfers.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [{
      path: 'plan',
      component: PlanComponent
    },
    {
      path: 'deposit',
      component: DepositComponent
    },
    {
      path: 'accounts',
      component: AccountsComponent
    },
    {
      path: 'transfers',
      component: TransfersComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
