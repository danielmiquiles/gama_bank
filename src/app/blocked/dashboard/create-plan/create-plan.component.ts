import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize, take } from 'rxjs/operators';
import { CreatePlan } from 'src/app/shared/interfaces/createPlan.interface';

import { CreatePlanService } from './create-plan.service';

@Component({
  selector: 'app-create-plan',
  templateUrl: './create-plan.component.html',
  styleUrls: ['./create-plan.component.css']
})
export class CreatePlanComponent implements OnInit {

  planForm: FormGroup;
  plan: CreatePlan;
  isSpinner = false;
  isLoading: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private createPlanService: CreatePlanService
  ) { }

  ngOnInit(): void {
    this.planForm = this.formBuilder.group({
      description: ['', Validators.required],
      login: ['', Validators.required],
      typeMoviment: ['', Validators.required],
    })
  }

  validateAllFormFields() {
    Object.keys(this.planForm.controls).forEach(field => {
      const control = this.planForm.get(field);
      control.markAsTouched();
    })
  }

  exibeErro(nomeControle: string) {
    if (!this.planForm.get(nomeControle)) {
      return false;
    }
    return this.planForm.get(nomeControle).invalid && this.planForm.get(nomeControle).touched;
  }
  
  onSubmit() {
    if (this.planForm.invalid) {
      this.validateAllFormFields();
      return
    }
    this.createPlan()
  }

  createPlan() {
    this.isLoading = true;

    const plan = {
      "descricao": this.planForm.value.description,
      "login": this.planForm.value.login,
      "tipoMovimento": this.planForm.value.typeMoviment
    }
    this.isSpinner = true;
    this.createPlanService.createPlans(plan)
    .pipe(
      take(1),
      finalize(() => this.isLoading = false)
    )
    .subscribe(
      response => this.onSuccess(),
      error => this.onError(error)
    )
    console.log('criei')
  }

  onSuccess() {
    this.toastr.success('Parabéns!', 'Plano conta criado!')
    this.router.navigate(['/#/dashboard/accounts']);
  }

  onError(error: any) {
    this.toastr.error('Tente novamente', 'Informações incorretas!', error);
    this.isSpinner = false;
  }
}
