import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountFormService {

  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient
  ) { }

  createUser(user: User) {
    return this.http.post<User>(`${this.API_URL}/usuarios`, user);
  }
}
