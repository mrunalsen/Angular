import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  submitted!: boolean;
  registrationForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }
  
  ngOnInit(): void {
    this.buildUserForm()
    console.log(this.registrationForm);
  }
  navigateToList() {
    this.router.navigate(['/users/users-list']);
  }
  onReset() {
    this.registrationForm.reset()
  }
  buildUserForm() {
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', Validators.required],
      gender: [''],
      date: [''],
      department: [''],
    });
  }

  onSubmit() {
    console.log(this.registrationForm);
    this.router.navigate(['user-list'])

  }

  get getvalue() {
    return this.registrationForm.controls
  }

  saveData() {
    if (this.registrationForm.dirty) {
      this.submitted = true;
      if (this.registrationForm.invalid) {
        return;
      }
    }
    // this.router.navigate(['users/users-list'])
  }
}
