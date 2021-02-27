import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ResponseAPI } from 'src/app/shared/interfaces/resposeApi.interface';
import { User } from 'src/app/shared/interfaces/user.interface';
import { environment } from 'src/environments/environment';

import { AuthService } from '../../shared/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class EsqueciSenhaService {
    API_URL = environment.API_URL;

    constructor(
        private http: HttpClient, 
        private authService: AuthService) {}
        
        signin(usuario: User) {
            return this.http.post<ResponseAPI>(`${this.API_URL}/altera-senha`, usuario)
            .pipe(
              tap((response) => {
                this.authService.setUsuario(response.usuario);
                this.authService.setToken(response.token);
              })
            );
          }
}

