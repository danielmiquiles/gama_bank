import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  isSpinner = false;
  depositForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.depositForm = this.formBuilder.group({
      date: ['', Validators.required],
      description: ['', Validators.required],
      valueTransfer: ['', Validators.required]
    })
  }

  exibeErro(nomeControle: string) {
    if (!this.depositForm.get(nomeControle)) {
      return false;
    }
    return this.depositForm.get(nomeControle).invalid && this.depositForm.get(nomeControle).touched;
  }

}
