import { Component, OnInit } from '@angular/core';

import { DashboardService } from './../dashboard.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})
export class AccountsComponent implements OnInit {
  constructor(
    private dashboardService: DashboardService
  ) {}

  inicio: string;
  fim: string;
  saldo: number
  visible: boolean;

  ngOnInit(): void {

    const data = new Date();
    var ultimoDia = new Date(data.getFullYear(), data.getMonth() + 1, 0);
    this.inicio = this.data(data.getFullYear(), data.getMonth(), 1);
    this.fim = this.data(ultimoDia.getFullYear(), ultimoDia.getMonth(), ultimoDia.getDate());
    this.getDashboardInfos();
    this.visible = this.dashboardService.toggle();
  }

  data(ano, mes, dia): string{

    const diaFormatado = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14',
    '15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31',];
    const mesFormatado = ['01','02','03','04','05','06','07','08','09','10','11','12'];
    return `${ano}-${mesFormatado[mes]}-${diaFormatado[dia]}`;
  }


  getDashboardInfos(){
    this.dashboardService.getDashboardInfos(this.inicio, this.fim)
    .subscribe(
      response => this.onSuccess(response),
      error => console.error(error),            
    )
  }

  onSuccess(response){
    console.log(response);    
    this.saldo = response.contaBanco.saldo
  }




}
