import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Conta } from './../interfaces/conta.interface';
import { ContaCredito } from './../interfaces/contaCredito.interface';
import { User } from './../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router
  ) {}

  usuario: User;
  token: string;
  conta: Conta;
  contaCredito: ContaCredito;

  setUsuario(usuario) {
    this.usuario = usuario;
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  getUsuario() {
    if (this.usuario) {
      return this.usuario;
    }
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
      this.usuario = JSON.parse(usuarioGuardado);
      return this.usuario;
    }
    return null;
  }

  setToken(token: any) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken() {
    if (this.token) {
      return this.token;
    }
    const tokenGuardado = localStorage.getItem('token');
    if (tokenGuardado) {
      this.token = tokenGuardado;
      return this.token;
    }
    return null;
  }

  setConta(conta: Conta){
    this.conta = conta;
    localStorage.setItem('conta', JSON.stringify(conta));
  }

  getConta() {
    if (this.conta) {
      return this.conta;
    }
    const contaGuardada = localStorage.getItem('conta');
    if (contaGuardada) {
      this.conta = JSON.parse(contaGuardada);
      return this.conta;
    }
    return null;
  }


  setContaCredito(conta: ContaCredito){
    this.conta = conta;
    localStorage.setItem('contaCredito', JSON.stringify(conta));
  }

  getContaCredito() {
    if (this.conta) {
      return this.conta;
    }
    const contaGuardada = localStorage.getItem('contaCredito');
    if (contaGuardada) {
      this.conta = JSON.parse(contaGuardada);
      return this.conta;
    }
    return null;
  }

  estaLogado(): boolean {
    return this.getUsuario() && this.getToken() ? true : false;
  }


  setNewsenha(response: string){
    console.log(response);    
    localStorage.setItem('Senha Provisoria',response)
  }

  getNewsenha(){
    return localStorage.getItem('Senha Provisoria')
  }

  logout() {
    this.usuario = null;
    this.token = null;
    localStorage.clear();
    this.router.navigate(['/login'])
  }
}
