import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plans } from 'src/app/shared/interfaces/plans';
import { AuthService } from 'src/app/shared/services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient,
    private token: AuthService
  ) { }


  getPlans() {
      const user = this.token.getUsuario();
      let headers = new HttpHeaders({
        'Authorization': this.token.getToken()
      });
      let params = new HttpParams().set('login', user.login);
      let httpOptions = {
        headers: headers,
        params: params
      };
      return this.http.get<Plans[]>(`${this.API_URL}/lancamentos/planos-conta`, httpOptions)
  }
}
