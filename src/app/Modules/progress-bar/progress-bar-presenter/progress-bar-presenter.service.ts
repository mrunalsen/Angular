import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { formdetails } from '../model/progress-bar-model';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarPresenterService {
 private progressform : Subject<formdetails>
 public progressform$ : Observable<formdetails>
 
  constructor() { 
    this.progressform = new Subject();
    this.progressform$ = new Observable();

    this.progressform$ = this.progressform.asObservable();
  }
  onSubmit(user : FormGroup){
    if(!user.valid){
      return
    }
    this.progressform.next(user.value)
  }
}
