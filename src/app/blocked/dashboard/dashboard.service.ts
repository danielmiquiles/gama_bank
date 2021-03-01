import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseDash } from 'src/app/shared/interfaces/responseDash.interface';
import { AuthService } from 'src/app/shared/services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  API_URL = environment.API_URL;
  visible = true;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getDashboardInfos(inicio: string, fim: string){
    const user = this.authService.getUsuario();
    return this.http.get<ResponseDash>(`${this.API_URL}/dashboard`,{
      headers:{
        Authorization: this.authService.getToken()
      },
      params:{
        inicio: inicio,
        fim: fim,
        login: user.login
      }
    })
  }

  toggle(){
    return !this.visible;    
  }

}
