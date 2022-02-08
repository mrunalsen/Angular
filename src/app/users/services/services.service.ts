import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  apiLink: string;
  
  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL;
   }

   createData(userData:User):Observable<User> {
     return this.http.post<User>(`${this.apiLink}/form/`, userData);
   }

   
  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiLink}/form`);
  }

  updateUser(id:number,userData: User): Observable<User> {
    return this.http.put<User>(`${this.apiLink}/form/${id}`, userData);
  }

  getById(id: number) {
    return this.http.get<User>(`${this.apiLink}/form/${id}`);
  }

  deleteUser(id: number): Observable<number> {
    return this.http.delete<number>(`${this.apiLink}/form/${id}`);
  }
}
