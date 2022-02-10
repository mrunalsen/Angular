import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { resumeDetails } from '../model/resume.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
 apiLink : string
 constructor(private http: HttpClient) {
   this.apiLink= environment.baseURL
  }
  
  saveForm(resumeData:resumeDetails):Observable<resumeDetails>{
    return this.http.post<resumeDetails>(`${this.apiLink}/resumePost`,resumeData)
  }
 getForm():Observable<resumeDetails[]>{
   return this.http.get<resumeDetails[]>(`${this.apiLink}/resumePost`);
 }
}
