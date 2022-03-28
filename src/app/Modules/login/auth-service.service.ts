import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login, MyResponse } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(
    private http : HttpClient
  ) { }
    setData(token: string){
      localStorage.setItem('token', token)
    }

  loginData(creds: login): Observable<MyResponse>{
    return this.http.post<MyResponse>(`http://localhost:3001/login`, creds)
  }
  
}
