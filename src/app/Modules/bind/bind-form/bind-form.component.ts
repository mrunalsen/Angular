import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BindService } from '../bind.service';
import { Form } from '../form.model';

@Component({
  selector: 'app-bind-form',
  templateUrl: './bind-form.component.html',
  styleUrls: ['./bind-form.component.scss']
})
export class BindFormComponent implements OnInit {
//   // user:string;
//   addFormData : FormGroup;
//   constructor(
//     private userService: BindService
//   ) { }

//   ngOnInit(): void {
//     // this.userService.cast.subscribe(user => this.user = user);
//     this.addFormData = new FormGroup({
//       'firstName': new FormControl(),
//       'lastName' : new FormControl(),
//       'city' : new FormControl(),
//       'state' : new FormControl(),
//       'zip' : new FormControl(),
//     })
//   }
//   addForm(){
//     console.log(this.addFormData.value);
//   }
// }


public userform:FormGroup;
public submitted: boolean = false;

private _editData:Form;
private _isEdit:boolean;
private _id:number;

constructor(private fb:FormBuilder,private service:BindService) { 
  this.userform=this.buildForm();
}

ngOnInit(): void {
  this.service.editData$.subscribe((result)=>{
    this._id=result.id
    this._editData=result;
    this._isEdit=true;
    console.log(result)
    this.userform.patchValue(this._editData)
  })
}

buildForm(){
return this.fb.group({
  firstName: ['', Validators.required],
  lastName: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  contact: ['', [Validators.required, Validators.maxLength(10)]],
})
}

get getvalue() {
  return this.userform.controls;
}

onSubmit(){
  if(!this._isEdit){
    this.service.add(this.userform.value);
  }
  else{
    this.service.edit(this._id,this.userform.value);
    this._isEdit=false;
  }
  this.userform.reset();
}
}