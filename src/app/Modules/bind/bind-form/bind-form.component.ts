import { Component, OnInit } from '@angular/core';
import { BindService } from '../bind.service';

@Component({
  selector: 'app-bind-form',
  templateUrl: './bind-form.component.html',
  styleUrls: ['./bind-form.component.scss']
})
export class BindFormComponent implements OnInit {
  user:string;
  constructor(
    private userService: BindService
  ) { }

  ngOnInit(): void {
    this.userService.cast.subscribe(user => this.user = user);
  }

}
