import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BindService } from '../bind.service';

@Component({
  selector: 'app-bind-form',
  templateUrl: './bind-form.component.html',
  styleUrls: ['./bind-form.component.scss']
})
export class BindFormComponent implements OnInit {
  // user:string;
  addFormData : FormGroup;
  constructor(
    private userService: BindService
  ) { }

  ngOnInit(): void {
    // this.userService.cast.subscribe(user => this.user = user);
    this.addFormData = new FormGroup({
      'firstName': new FormControl(),
      'lastName' : new FormControl(),
      'city' : new FormControl(),
      'state' : new FormControl(),
      'zip' : new FormControl(),
    })
  }
  addForm(){
    console.log(this.addFormData.value);
    
  }
}
