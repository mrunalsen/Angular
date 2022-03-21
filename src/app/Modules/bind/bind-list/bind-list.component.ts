import { Component, OnInit } from '@angular/core';
import { BindService } from '../bind.service';
import { Form } from '../form.model';

@Component({
  selector: 'app-bind-list',
  templateUrl: './bind-list.component.html',
  styleUrls: ['./bind-list.component.scss']
})
export class BindListComponent implements OnInit {
//   user:string;
//   editUser: string;
//   constructor(
//     private userService: BindService
//   ) { }

//   ngOnInit(): void {
//     this.userService.cast.subscribe(user => this.user = user);
//   }

//   editTheUser() {
//     this.userService.editUser(this.editUser)
//   }
// }


public data:Form[];
constructor(private service:BindService) {
  this.data=[];
 }

ngOnInit(): void {
  this.getData();
}

public getData(){
  this.service.form$.subscribe((result)=>{
    this.data=result;
  })
}

public editData(form:Form){
  this.service.saveDatatoEdit(form);
}

public deleteData(id:number){
  this.service.delete(id);
} 
}
