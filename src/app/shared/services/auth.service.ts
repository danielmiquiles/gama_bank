import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient
  ) { }

  usuario: User;
  token: string;
  setUsuario(usuario: User){
    this.usuario = usuario;
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  getUsuario(){
    if(this.usuario){
      return this.usuario;
    }
    const usuarioGuardado = localStorage.getItem('usuario');
    if(usuarioGuardado){
      this.usuario = JSON.parse(usuarioGuardado);
      return this.usuario;
    }
    return null;
  }

  setToken(token: string){
    this.token = token;
    localStorage.setItem('token',token);
  }

  getToken(){
    if(this.token){
      return this.token;
    }
    const tokenGuardado = localStorage.getItem('token');
    if(tokenGuardado){
      this.token = tokenGuardado;
      return this.token;
    }
    return null;
  }

  estaLogado(): boolean{
    return this.getUsuario() && this.getToken()? true: false;
  }
}
