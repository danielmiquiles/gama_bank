import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CreatePlan } from 'src/app/shared/interfaces/createPlan.interface';

@Component({
  selector: 'app-create-plan',
  templateUrl: './create-plan.component.html',
  styleUrls: ['./create-plan.component.css']
})
export class CreatePlanComponent implements OnInit {

  planForm: FormGroup;
  createPlan: CreatePlan;
  isSpinner = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.planForm = this.formBuilder.group({
      description: ['', Validators.required],
      login: ['', Validators.required],
      tipoMovimento: ['', Validators.required],
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
}
