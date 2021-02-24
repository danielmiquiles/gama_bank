import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { CreateAccount } from './create-account.interface';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountFormService {

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient
  ) { }

  createUser(newUser: CreateAccount) {
    return this.http.post<CreateAccount>(this.API_URL, newUser);
  }
}
