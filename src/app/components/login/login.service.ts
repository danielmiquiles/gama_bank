import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  authService: any;

  constructor() { }

  // signin(email: string, password: string): Observable<any>{
  //   if(email === 'daniel@gmail.com' && password === '123'){
  //     return of({
  //       usuario: {
  //         nome: 'Daniel',
  //         email: 'daniel@gmail.com',
  //         sobrenome: 'Miquiles'
  //       },
  //       token: 'dHRH79c876676x5233m0fd75d'
  //     }).pipe(
  //       delay(3000),
  //       tap(response => {
  //         this.authService.setUsuario(response.usuario);
  //         this.authService.setToken(response.token);
  //       })
  //     );
  //   }

  //   return timer(5000)
  //   .pipe(
  //     mergeMap( () => throwError('Usuario ou senha incorretos'))
  //   )
  // }
}
