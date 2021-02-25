import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Login } from './../../shared/interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URL  = environment.API_URL
  authService: any;

  constructor(
    private http: HttpClient
  ) { }

  signin(usuario:Login){

    return this.http.post(`${this.API_URL}/login`, usuario);


    // if(email === 'daniel@gmail.com' && password === '123'){
    //   return of({
    //     usuario: {
    //       nome: 'Daniel',
    //       email: 'daniel@gmail.com',
    //       sobrenome: 'Miquiles'
    //     },
    //     token: 'dHRH79c876676x5233m0fd75d'
    //   }).pipe(
    //     delay(3000),
    //     tap(response => {
    //       this.authService.setUsuario(response.usuario);
    //       this.authService.setToken(response.token);
    //     })
    //   );
    // }

  //   return timer(5000)
  //   .pipe(
  //     mergeMap( () => throwError('Usuario ou senha incorretos'))
  //   )
  }
}
