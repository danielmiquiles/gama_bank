import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CreateAccountFormService {
  API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  createUser(user: User) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });
    let httpOptions = {
      headers: headers,
    };

    console.log(user);
    return this.http.post<User>(`${this.API_URL}/usuarios`, user, httpOptions);
  }
}
