import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { progressForm} from './userform.model';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {
  apiLink: string;

  constructor(private http: HttpClient) { 
    this.apiLink = environment.baseURL;
  }
  public getUser(): Observable<progressForm[]> {
    return this.http.get<progressForm[]>(`${this.apiLink}`)
  }
}
