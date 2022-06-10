import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-progress-form-container',
  templateUrl: './progress-form-container.component.html',
  styleUrls: ['./progress-form-container.component.scss']
})
export class ProgressFormContainerComponent implements OnInit {
  public info: FormGroup;
  public contact: FormGroup;
  public forms: any;

  public isinfo: boolean = false;
  public iscontact: boolean = false;
  public isinfoform: boolean = false;
  public iscontactform: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { this.forms = [
    [
      {
        formControlName: 'email',
        inputType: 'email',
      },
      {}
    ]
  ]
  this.info = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    username: ['', Validators.required]
  });
  this.contact = this.fb.group({
    contact: ['', Validators.required],
    email: ['', Validators.required],
  })
}
get getvalue() {
  return this.info.controls;
}

public next() {
  if (this.info.valid) {
    this.iscontact = true;
  }
  if (this.iscontact && this.contact.valid) {
    this.isinfoform = true;
  }
}
public previous() {
  this.contact.reset();
  this.iscontact = false;
  this.isinfoform = false;
}

public formFields(index: number) {
  return Object.entries(this.forms[index].value);
}
}
