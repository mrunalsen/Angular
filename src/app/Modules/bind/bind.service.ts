import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class BindService {
  private user = new BehaviorSubject<string>('Mrunal');
  cast = this.user.asObservable();
  constructor() { }


  editUser(newUser) {
    this.user.next(newUser);
  }
}
