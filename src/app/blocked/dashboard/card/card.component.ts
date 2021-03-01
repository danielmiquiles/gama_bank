import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() inicio: string
  @Input() fim: string
  @Input() saldo: number
  transacoes = 0;

  constructor() { }

  ngOnInit(): void {
    
  }

}
