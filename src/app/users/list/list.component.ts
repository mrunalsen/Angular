import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/model';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  userData: User[];
  searchText:string="";
  constructor(private router: Router,private service: ServicesService) { }

  ngOnInit(): void {
    this.getUserData();
  }
  navigateToForm() {
    this.router.navigate(['/users/users-form']);
  }

  getUserData() {
    this.service.getUserList().subscribe(
      (result) => {
        this.userData= result;
      },
      (error) => {
        console.log('Something Went Wrong');
      }
    );
  }
  deleteUser(id: number) {
    this.service.deleteUser(id).subscribe(
      (result) => {
        alert(id + ' is Deleted');
        this.getUserData();
      },
      (error) => {
        alert('Something Went Wrong');
      }
    );
}
}
