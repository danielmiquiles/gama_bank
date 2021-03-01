import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lancamentos } from 'src/app/shared/interfaces/lancamentos.interface';
import { Plans } from 'src/app/shared/interfaces/plans';
import { environment } from 'src/environments/environment';

import { AuthService } from './../../../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

    API_URL = environment.API_URL;


  constructor(
      private http: HttpClient,
      private authService: AuthService
  ) { }


  getPlanAccount(){
      const user = this.authService.getUsuario();
      let headers = new HttpHeaders({
        'Authorization': this.authService.getToken()
      });
      let params = new HttpParams().set('login', user.login);
      let httpOptions = {
        headers: headers,
        params: params
      };
      return this.http.get<Plans[]>(`${this.API_URL}/lancamentos/planos-conta`, httpOptions);
  }

  transfer(lancamento: Lancamentos){
    const conta = this.authService.getContaCredito();
    const user = this.authService.getUsuario();
    const info = {
      conta: conta.id,
      data: lancamento.data,
      descricao: lancamento.descricao,
      contaDestino: lancamento.contaDestino,
      login: user.login,
      planoConta: lancamento.planoConta,
      valor: lancamento.valor
    }

    let headers = new HttpHeaders({
      'Authorization': this.authService.getToken()
    });
    let httpOptions = {
      headers: headers,
    };
    return this.http.post<any>(`${this.API_URL}/lancamentos`, info , httpOptions)
  }
}
