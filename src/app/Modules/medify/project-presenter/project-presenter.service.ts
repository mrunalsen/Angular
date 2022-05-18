import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient, Prescription } from '../models/medify.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectPresenterService {

  constructor(private http: HttpClient) { }
  getPrescription(): Observable<Prescription[]>{
    return this.http.get<Prescription[]> (`http://localhost:3000/prescription`);
  }
  
  getPatient(): Observable<Patient[]>{
    return this.http.get<Patient[]> (`http://localhost:3000/patient`);
  }
}
