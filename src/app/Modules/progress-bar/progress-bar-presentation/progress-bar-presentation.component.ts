import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-progress-bar-presentation',
  templateUrl: './progress-bar-presentation.component.html',
  styleUrls: ['./progress-bar-presentation.component.scss']
})
export class ProgressBarPresentationComponent implements OnInit {
  public info: FormGroup;
  public contact: FormGroup;

  public isinfo: boolean = false;
  public iscontact: boolean = false;
  public isinfoform: boolean = false;
  public iscontactform: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
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
}
