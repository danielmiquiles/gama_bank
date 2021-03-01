import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Login } from './../../shared/interfaces/login.interface';
import { ResponseAPI } from './../../shared/interfaces/resposeApi.interface';
import { AuthService } from './../../shared/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  API_URL = environment.API_URL;

  constructor(private http: HttpClient, private authService: AuthService) {}

  signin(usuario: Login) {
    return this.http.post<ResponseAPI>(`${this.API_URL}/login`, usuario)
    .pipe(
      tap((response) => {
        this.authService.setUsuario(response.usuario);
        this.authService.setToken(response.token);
        this.authService.setConta(response.conta);
        this.authService.setContaCredito(response.contaCredito);
      })
    );
  }
}
