import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from 'src/app/Assessment2/services/form.service';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.scss']
})
export class AddformComponent implements OnInit {
  submitted!: boolean;
  registrationForm: FormGroup;
  id:number;
  isAddMode?: boolean;
  constructor(private fb: FormBuilder, private router: Router, private service: FormService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    this.buildUserForm()
    console.log(this.registrationForm);

    if (!this.isAddMode) {
      this.service
        .getById(this.id)
        .subscribe((x) => this.registrationForm.patchValue(x));
    }
    
  }

  onReset() {
    this.registrationForm.reset()
  }
  buildUserForm() {
    this.registrationForm = this.fb.group({
      id: [''],
      firstName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', Validators.required,],
      city: [''],
      gender: [''],
      date: [''],
      department: ['', Validators.required],
    } , 
    );
  }

onSubmit(){
    if(this.isAddMode){
      this.saveData()
    }else{
      this.updateUser()
    }
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
    console.log(this.registrationForm);
    this.service.createForm(this.registrationForm.value).subscribe((result)=> {
      alert('Data Saved Successfully');
    },
    (error)=> {
      alert('Something went wrong');
    }
    );
    
    this.router.navigate(['userform/viewform'])
  }

  updateUser() {
    console.log(this.registrationForm);
    this.service.updateUser(this.id,this.registrationForm.value).subscribe(
      (result) => {
        alert('Data Updated Successfully');
      },
      (error) => {
        alert('Something Went Wrong');
      }
    );
    this.router.navigate(['userform/viewform']);
  }
  // get getvalue() {
  //   return this.registrationForm.controls;
  // }
}
