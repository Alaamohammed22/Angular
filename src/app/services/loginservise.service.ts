import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginComponent } from '../component/login/login.component';
import { Login } from '../Shared Classes and Types/Login';
@Injectable({
  providedIn: 'root',
})
export class LoginserviseService {
  url: string = 'http://localhost:3000/Login';
  constructor(private http: HttpClient) {}

  Login(User: Login) {
    return this.http.post(this.url, User);
  }
}
