import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';
import { MyResponse } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  login: boolean = true
  submitted = false
  constructor(private fb: FormBuilder, private auth: AuthServiceService, private router: Router) {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  ngOnInit(): void {

  }
  onSwitch() {
    this.login = !this.login;
  }
  loginSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
      this.auth.loginData(this.loginForm.value).subscribe((res: MyResponse) => {
        this.auth.setData(res.token);
        console.log(res);
        this.router.navigateByUrl("/users/users-list")
      }
      )
    }
  }
}
