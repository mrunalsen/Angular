import { Injectable } from '@angular/core';
import { observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  apiLink: string
  constructor(private httpService: HttpClient) {
    this.apiLink = environment.baseURL;
   }
//    getData(): Observable<any> {
//      return this.httpService.get(`${this.apiLink}/posts`);
//    }
//    createData() {
//      return this.httpService.post(`${this.apiLink}/`);
//    
}
