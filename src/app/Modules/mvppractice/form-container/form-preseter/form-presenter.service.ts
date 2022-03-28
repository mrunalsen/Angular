import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { mvpData } from '../../models/mvp-practice.model';

@Injectable({
  providedIn: 'root'
})
export class FormPresenterService {
private mvpform: Subject<mvpData>
public mvpform$: Observable<mvpData>

constructor() { 

  this.mvpform = new Subject();
  this.mvpform$ = new Observable();
  this.mvpform$ = this.mvpform.asObservable();
}

onsubmit(mvpData: FormGroup) {
  if (!mvpData.valid) {
    return
  }
  this.mvpform.next(mvpData.value)
}
}
