import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { mvpData } from '../models/mvp-practice.model';

@Injectable({
  providedIn: 'root'
})
export class MvppracticeService {
  apilink : string
  constructor(private http : HttpClient) { 
    this.apilink = environment.baseURL;
  }
  public getmvpData(): Observable<mvpData[]> {
    return this.http.get<mvpData[]>('http://localhost:3000/mvpData')
  }
  public getmvpDataById(id : string): Observable<mvpData>{
    return this.http.get<mvpData>(`http://localhost:3000/mvpData/${id}`)
  }
  public mvpDelete(id : number): Observable<mvpData>{
    return this.http.delete<any>(`http://localhost:3000/mvpData/${id}`)
  }
  public saveData(mvpData: mvpData): any {
    return this.http.post<any>('http://localhost:3000/mvpData/',mvpData)
  }
  public editData(mvpData: mvpData, id:string): any {
    return this.http.put<any>(`http://localhost:3000/mvpData/${id}`, mvpData)
  }

}
