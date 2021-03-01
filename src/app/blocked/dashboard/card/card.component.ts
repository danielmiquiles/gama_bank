import { Component, Input, OnInit, Output } from '@angular/core';
import { LancamentosRes } from 'src/app/shared/interfaces/lancamentosRes.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() saldo: number;
  @Input() visible: boolean;
  transacoes = 0;

  constructor() {}

  ngOnInit(): void {}
}
