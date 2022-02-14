import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { List } from 'src/app/Assessment2/models/model';
import { FormService } from 'src/app/Assessment2/services/form.service';



@Component({
  selector: 'app-viewform',
  templateUrl: './viewform.component.html',
  styleUrls: ['./viewform.component.scss']
})
export class ViewformComponent implements OnInit {
  formArray = new FormArray([]);
  userData: List[];
  searchText:string="";
  constructor(private router: Router, private service: FormService) { }
  addControlToArray(): void {
    this.formArray.push(new FormControl(''));
  }

  ngOnInit(): void {
    this.getUserData();
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
