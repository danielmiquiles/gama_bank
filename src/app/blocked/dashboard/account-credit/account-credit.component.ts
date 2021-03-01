import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-account-credit',
  templateUrl: './account-credit.component.html',
  styleUrls: ['./account-credit.component.css']
})
export class AccountCreditComponent implements OnInit {

  @Input() saldo: number
  transacoes = 0

  constructor() { }

  ngOnInit(): void {
  }

}
