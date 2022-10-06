import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserModel} from "../components/login/model/user.model";

const AUTH_API = 'http://localhost:5000/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(UserModel: UserModel): Observable<any> {
    return this.http.post(AUTH_API + 'loginUser', UserModel, httpOptions);
  }

  register(UserModel: UserModel): Observable<any> {
    return this.http.post(AUTH_API + 'registerUser', UserModel, httpOptions);
  }
}
