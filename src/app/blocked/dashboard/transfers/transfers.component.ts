import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Plans } from 'src/app/shared/interfaces/plans';

import { TransferService } from './transfer.service';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})
export class TransfersComponent implements OnInit {

  isSpinner = false;
  transferForm: FormGroup;
  plansAccount: Plans[];

  constructor(
    private formBuilder: FormBuilder,
    private transferService: TransferService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.transferForm = this.formBuilder.group({
      contaDestino: ['', Validators.required],
      data: ['', Validators.required],
      descricao: ['', Validators.required],
      valor: ['', Validators.required],
    });

    this.getPlansAccount();
  }

  exibeErro(nomeControle: string) {
    if (!this.transferForm.get(nomeControle)) {
      return false;
    }
    return (
      this.transferForm.get(nomeControle).invalid &&
      this.transferForm.get(nomeControle).touched
    );
  }

  onSubmit() {
    const lancamento = {
      descricao: String(this.transferForm.value.descricao),
      data: this.transferForm.value.data,
      valor: this.transferForm.value.valor,
      planoConta: this.plansAccount[0].id,
      contaDestino: this.transferForm.value.contaDestino,
      conta: 0,
      login: ''      
    }

    this.transferService.transfer(lancamento)
    .subscribe(
      response => this.onSubmitSuccess(response),
      error => console.error(error),
    )
  }

  onSubmitSuccess(response: string){
    this.transferForm.reset();
  }

  getPlansAccount() {
    this.transferService.getPlanAccount().subscribe(
      (response) => this.ongetPlansAccountSuccess(response),
      (error) => console.error(error)
    );
  }

  ongetPlansAccountSuccess(response: Plans[]){
    console.log(response);    
    this.plansAccount = response.filter( plan => plan.tipoMovimento === "TU");
  }

}
