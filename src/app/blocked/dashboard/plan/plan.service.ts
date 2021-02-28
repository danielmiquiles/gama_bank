import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plans } from 'src/app/shared/interfaces/plans';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient
  ) { }

  getPlans() {
    return this.http.get<Plans[]>(`${this.API_URL}/lancamentos/planos-conta`)
  }
}
