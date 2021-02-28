import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs/operators';
import { Plans } from 'src/app/shared/interfaces/plans';

import { PlanService } from './plan.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  isLoading: boolean;
  plans: Plans[];

  constructor(
    private planService: PlanService
  ) { }

  ngOnInit(): void {
    this.loadingPlans();
  }

  loadingPlans() {
    this.isLoading = true;

    this.planService.getPlans()
    .pipe(
      take(1),
      finalize(() => this.isLoading = false)
    )
    .subscribe(
      response => this.onSuccess(response)
    )
  }

  onSuccess(response: Plans[]) {
    this.plans = response;
  }
}
