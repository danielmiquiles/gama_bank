import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreatePlan } from 'src/app/shared/interfaces/createPlan.interface';
import { AuthService } from 'src/app/shared/services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreatePlanService {

  API_URL = environment.API_URL;
  
  constructor(
    private http: HttpClient,
    private token: AuthService
  ) { }

  createPlans(plan: CreatePlan) {
    const user = this.token.getUsuario();
    let headers = new HttpHeaders({
      'Authotization': this.token.getToken()
    });
    let params = new HttpParams().set('login', user.login);
    let httpOptions = {
      headers: headers,
      params: params
    };
    return this.http.post<CreatePlan>(`${this.API_URL}/lancamentos/planos-conta`, plan, httpOptions);
  }
}
