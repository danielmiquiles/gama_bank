import { LancamentosRes } from './../../../shared/interfaces/lancamentosRes.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lastest-release',
  templateUrl: './lastest-release.component.html',
  styleUrls: ['./lastest-release.component.css']
})
export class LastestReleaseComponent implements OnInit {

  @Input() transacoes: LancamentosRes[];
  @Input() transacoesCredito: LancamentosRes[];

  constructor() { }

  ngOnInit(): void {  
  }

  ngOnChanges(changes) {    
  }

}
