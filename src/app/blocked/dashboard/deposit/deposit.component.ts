import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Plans } from 'src/app/shared/interfaces/plans';

import { DepositService } from './deposit.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css'],
})
export class DepositComponent implements OnInit {

  isSpinner = false;
  depositForm: FormGroup;
  plansAccount: Plans[];

  constructor(
    private formBuilder: FormBuilder,
    private depositService: DepositService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.depositForm = this.formBuilder.group({
      data: ['', Validators.required],
      descricao: ['', Validators.required],
      valor: ['', Validators.required],
    });

    this.getPlansAccount();
  }

  exibeErro(nomeControle: string) {
    if (!this.depositForm.get(nomeControle)) {
      return false;
    }
    return (
      this.depositForm.get(nomeControle).invalid &&
      this.depositForm.get(nomeControle).touched
    );
  }

  onSubmit() {
    const lancamento = {
      descricao: String(this.depositForm.value.descricao),
      data: this.depositForm.value.data,
      valor: this.depositForm.value.valor,
      planoConta: this.plansAccount[0].id,
      conta: 0,
      login: ''      
    }
    this.isSpinner = true;

    this.depositService.deposit(lancamento)
    .subscribe(
      response => this.onSubmitSuccess(response),
      error => this.onError(error)
    )
  }

  onSubmitSuccess(response: string){
    this.depositForm.reset();
    this.toastr.success('Você fez um depósito', 'Parabéns!')
  }

  onError(error: any) {
    this.isSpinner = false;
    this.toastr.error('Algo deu errado', 'Tente novamente!');
  }

  getPlansAccount() {
    this.depositService.getPlanAccount().subscribe(
      (response) => this.ongetPlansAccountSuccess(response),
      (error) => console.error(error)
    );
  }

  ongetPlansAccountSuccess(response: Plans[]){
    this.plansAccount = response.filter( plan => plan.tipoMovimento === "R");
  }
  
}
