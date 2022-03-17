import { Component, OnInit } from '@angular/core';
import { BindService } from '../bind.service';

@Component({
  selector: 'app-bind-list',
  templateUrl: './bind-list.component.html',
  styleUrls: ['./bind-list.component.scss']
})
export class BindListComponent implements OnInit {
  user:string;
  editUser: string;
  constructor(
    private userService: BindService
  ) { }

  ngOnInit(): void {
    this.userService.cast.subscribe(user => this.user = user);
  }

  editTheUser() {
    this.userService.editUser(this.editUser)
  }
}
