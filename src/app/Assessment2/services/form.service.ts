import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/users/model/model';
import { environment } from 'src/environments/environment';
import { List } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class FormService {
apiLink : string
  constructor(private http: HttpClient) {
    this.apiLink = environment.baseURL
   }
   createForm(userData:List):Observable<List> {
    return this.http.post<List>(`${this.apiLink}/formData/`, userData);
  }

   updateUser(id:number,userData: List): Observable<List> {
    return this.http.put<List>(`${this.apiLink}/formData/${id}`, userData);
  }
   getUserData():Observable<List[]> {
     return this.http.get<List[]>(`${this.apiLink}/formData`);
   }
   deleteUser(id: number): Observable<number> {
     return this.http.delete<number>(`${this.apiLink}/formData/${id}`);
   }
   getById(id: number) {
    return this.http.get<List>(`${this.apiLink}/formData/${id}`);
  }
  getUserList(): Observable<List[]> {
    return this.http.get<List[]>(`${this.apiLink}/formData`);
  }

}

