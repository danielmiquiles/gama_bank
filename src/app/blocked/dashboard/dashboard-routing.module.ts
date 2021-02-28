import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DepositComponent } from './deposit/deposit.component';
import { PlanComponent } from './plan/plan.component';

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
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
